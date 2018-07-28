const {
  scrapeNaver
} = require('./naver');

/**
* Naver class.
*/
function Naver(showname, date) {
  return scrapeNaver(showname, date);
}

module.exports = Naver;
