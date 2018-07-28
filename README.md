# Naver tv show ratings api

Scrapes ratings for a show from naver. Will be updated with more functions and better scraping later. Can only scrape the last 30 episodes as of now.

## Install

```bash
$ npm install --save naver-ratings-api
```

## Usage

The Date has to be in RFC2822 or ISO format, the year will get discarded, so until now it is only possible to search for the current year. Note that the date is more accurate for single episode searches.

```js
const Naver = require('naver-ratings-api');
Naver('런닝맨', '2018-07-22').then(ratingsData => {
  console.log(ratingsData);
})
```

Example output:

```
[ { episode: '410', date: '2018.07.22. (일) 오후 04:50', rating: '9.5%' } ]
```


```js
const Naver = require('naver-ratings-api');
Naver('런닝맨').then(ratingsData => {
  console.log(ratingsData);
})
```

Example output:

```
[ { episode: '410', date: '18/07/22', rating: '9.5%' },
  { episode: '409', date: '18/07/15', rating: '7.1%' },
  { episode: '408', date: '18/07/08', rating: '6.8%' },
  { episode: '407', date: '18/07/01', rating: '7.9%' },
  { episode: '406', date: '18/06/24', rating: '7.6%' },
  { episode: '405', date: '18/06/17', rating: '7.2%' },
  { episode: '404', date: '18/06/10', rating: '6.9%' },
  { episode: '403', date: '18/06/03', rating: '6.6%' },
  { episode: '402', date: '18/05/27', rating: '6.9%' },
  { episode: '401', date: '18/05/20', rating: '5.7%' },
  { episode: '400', date: '18/05/13', rating: '7.6%' },
  { episode: '399', date: '18/05/06', rating: '6.8%' },
  { episode: '398', date: '18/04/29', rating: '6.8%' },
  { episode: '397', date: '18/04/22', rating: '7.4%' },
  { episode: '396', date: '18/04/15', rating: '6.9%' },
  { episode: '395', date: '18/04/08', rating: '7.3%' },
  { episode: '394', date: '18/04/01', rating: '8.2%' },
  { episode: '393', date: '18/03/25', rating: '8.1%' },
  { episode: '392', date: '18/03/18', rating: '9.2%' },
  { episode: '391', date: '18/03/11', rating: '7.0%' },
  { episode: '390', date: '18/03/04', rating: '7.7%' },
  { episode: '389', date: '18/02/18', rating: '7.8%' },
  { episode: '388', date: '18/02/04', rating: '9.2%' },
  { episode: '387', date: '18/01/28', rating: '9.6%' },
  { episode: '386', date: '18/01/21', rating: '8.6%' },
  { episode: '385', date: '18/01/14', rating: '8.6%' },
  { episode: '384', date: '18/01/07', rating: '8.5%' },
  { episode: '383', date: '17/12/31', rating: '6.8%' },
  { episode: '382', date: '17/12/24', rating: '8.5%' },
  { episode: '381', date: '17/12/17', rating: '9.4%' } ]
```

Inspired by https://github.com/hyunchel/melon-chart-api
