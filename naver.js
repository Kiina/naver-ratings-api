const fetch = require('node-fetch');
const cheerio = require('cheerio');
const URL = 'https://search.naver.com/search.naver?&query=시청률+';
const XPATH = {
  episode: '.rate_title',
  date: '.title_date',
  rating: '.graph_num',
};

/**
* HTML parsing functions.
*/
function extractRating(htmlText, xpath) {
  const $ = cheerio.load(htmlText);

  function trimText() {
    //split everything after 회 to get rid of it and remove the unused date
    return $(this).text().split('회')[0].trim();
  }
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

const scrapeNaver = function scrapeNaver(showname) {
  const url = encodeURI(URL+showname);
  return fetchHtmlText(url)
    .then((htmlText) => {
      return extractRating(htmlText, XPATH);
    });
};

module.exports = {
  scrapeNaver
};
