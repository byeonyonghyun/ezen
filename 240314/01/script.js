import { API_KEY } from "./env.js";

const form = document.querySelector("form");

const moviDetail = (e) => {
  const { id } = e.target.parentElement;
  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, "_blank");
}


const creatBlock = ({ id, oister_path, original_title, title, vote_average, release_date }) => {
  const parent = document.querySelector(".contents");
  const movie = document.createElement("div");
  const poster = document.createElement("img");
  const detail = document.createElement("div");
  const h3 = document.createElement("h3");
  const info = document.createElement("div");
  const date = document.createElement("div");
  const rate = document.createElement("div");

  movie.className = "movie";
  detail.className = "detail";
  info.className = "info";
  date.className = "date";
  rate.className = "rate";

  h3.innerText = `${rlease_data}`;
  rate.innerText = `${rlease_data}`;
}


const getPopulatMovie = () => {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`;

  fetch(URL)
    .then((response) => response.json())
    .then(({ results }) => results.array.forEach((movie) => {
      creatBlock(movie);
    })
    )
};

getPopulatMovie();

const movieAll = () => {
  const movies = document.querySelectorAll(".movie");
}

const searchMovie = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const { value: keyword } = input;
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`;

  if (keyword) {
    fetch(searchURL)
      .then((response) => response.json())
      .then((results) => {
        results.forEach((movie) => {
          creatBlock(movie)
        })
      });
  }
};


form.addEventListener("submit", searchMovie);
//특정 요소를 클릭했을 때, 해당 아이템의 id값을 알고 있으면, 해당 값을 활용해서 주소창의 url에 parameter