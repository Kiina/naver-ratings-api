const fetch = require('node-fetch');
const cheerio = require('cheerio');
const URL = 'https://search.naver.com/search.naver?&query=시청률+';
const moment = require('moment');

const XPATH = {
  episode: '.rate_title',
  date: '.title_date',
  rating: '.graph_num',
};

const XPATHSINGLE = {
  episode: '#episode_title_bar > div > h4 > span.num',
  date: '#brcs_detail > dl > dd:nth-child(2) > span',
  rating: '.fred',
};


/**
* HTML parsing functions.
*/
function extractRating(htmlText, xpath) {
  const $ = cheerio.load(htmlText);
  function trimText() {
    //split everything after 회 to get rid of it and remove the unused date
    return $(this).text().split('회')[0].trim();
  };
  const episode = $(xpath.episode).map(trimText).get();
  const date = $(xpath.date).map(trimText).get();
  const rating = $(xpath.rating).map(trimText).get();

  return episode.map((el, i) => ({
    episode: el,
    date: date[i],
    rating: rating[i],
  }));
}

function fetchHtmlText(url) {
  return fetch(url).then(resp => resp.text());
}

const scrapeNaver = function scrapeNaver(showname, date) {
  moment.locale('ko');
  let url;
  if(date!=undefined){
    url = encodeURI(URL+showname+' '+moment(date).format('MMMM Do'));
    return fetchHtmlText(url)
      .then((htmlText) => {
        return extractRating(htmlText, XPATHSINGLE);
      });
  }
  else{
    url = encodeURI(URL+showname);
    return fetchHtmlText(url)
      .then((htmlText) => {
        return extractRating(htmlText, XPATH);
      });
  }
};

module.exports = {
  scrapeNaver
};
