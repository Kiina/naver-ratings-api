const {
  scrapeNaver
} = require('./naver');

/**
* Naver class.
*/
function Naver(showname) {
  return scrapeNaver(showname);
}

module.exports = Naver;
