//in class exercise

// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const url = `${BASE_URL}?q=car&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    //grabs article snippet
    const snippet = article.snippet;
    document.getElementById('article-snippet').innerText = snippet;

    // Set the href on the Full Article link
    const fullArticleLink = article.web_url;
    document.getElementById('full-article-link').href = fullArticleLink;

    //grabs article authors name
    const authorName = article.byline ? article.byline.original : 'Unknown Author';
    document.getElementById('author-name').innerText = `Author: ${authorName}`;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });
