"use strict";
const card_news = document.querySelector(".card-news");
const search = document.querySelector(".searchh");
const input = document.querySelector(".inputt");
let key = "70883132ffae4e8ea625a5fbd0739a81";
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=70883132ffae4e8ea625a5fbd0739a81`;
search.addEventListener("click", fn);
function fn(e) {
  e.preventDefault();
  const d = input.value;
  if (d == "") {
    alert("Please enter news related keyword");
    return;
  }
  card_news.innerHTML = "";
  let urll = `https://newsapi.org/v2/everything?q=${d}&from=2021-06-05&sortBy=popularity&apiKey=70883132ffae4e8ea625a5fbd0739a81`;
  fetch(urll)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.articles.forEach((article) => {
        let d = `<div class="col-lg-4 col-md-6">
            <div class="card  my-2">
              <div class="card-header author-1">${article.author}</div>
              <div class="card-body flex flex-column">
                <img src=${article.urlToImage} class="mb-2 image-1"alt="">
                <div class="card-title text-muted text-center heading-1"><h3>${article.title}</h3></div>
                <p class=" text-center px-2 description-1">${article.description}</div>
                <a href=${article.url} class="btn btn-link btn-outline-primary mr-2 mb-2 w-25% ml-auto">Read More</a>
                <div class="card-footer ">
                 <p>${article.publishedAt}</p>
               </div>
            </div>
          </div>`;
        card_news.innerHTML += d;
      });
    });
  return;
}
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.articles.forEach((article) => {
      let d = `<div class="col-lg-4 col-md-6">
          <div class="card  my-2">
            <div class="card-header author-1">${article.author}</div>
            <div class="card-body flex flex-column">
              <img src=${article.urlToImage} class="mb-2 image-1"alt="">
              <div class="card-title text-muted text-center heading-1"><h3>${article.title}</h3></div>
              <p class=" text-center px-2 description-1">${article.description}</div>
              <a href=${article.url} class="btn btn-link btn-outline-primary mr-2 mb-2 w-25% ml-auto">Read More</a>
              <div class="card-footer ">
               <p>${article.publishedAt}</p>
             </div>
          </div>
        </div>`;
      card_news.innerHTML += d;
    });
  });
