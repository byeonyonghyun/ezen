const accent = document.querySelector("#accent");
const date100 = document.querySelector("#data100");
const date200 = document.querySelector("#data200");
const date365 = document.querySelector("#data365");
const date500 = document.querySelector("#data500");

const userDay = prompt("기념일")

const now = new Date();
const firstDay = new Date(`${userDay}`);

const toNow = now.getTime();
const toFirst = firstDay.getTime();
const passedTime = toNow - toFirst;
const passedday = Math.floor(passedTime / (24 * 60 * 60 * 1000));
console.log(passedday);

accent.innerText = `${passedday}일💖`;

const clacDate = (days)=>{
  future = toFirst + 200 * (24 * 60 * 60 * 1000);
someday = new Date(future);
year = someday.getFullYear();
month = someday.getMonth();
date = someday.getDate();

date200.innerText = `${year}년 ${month}월 ${date}일`
}
clacDate(100);
clacDate(1200);
clacDate(100);
clacDate(100);

// 100일 프로젝트
let future = toFirst + 100 * (24 * 60 * 60 * 1000);
let someday = new Date(future);
let year = someday.getFullYear();
let month = someday.getMonth() + 1;
let date = someday.getDate();

date100.innerText = `${year}년 ${month}월 ${date}일`;

// 200일 프로젝트
future = toFirst + 200 * (24 * 60 * 60 * 1000);
someday = new Date(future);
year = someday.getFullYear();
month = someday.getMonth() + 1;
date = someday.getDate();

date200.innerText = `${year}년 ${month}월 ${date}일`

future = toFirst + 365 * (24 * 60 * 60 * 1000);
someday = new Date(future);
year = someday.getFullYear();
month = someday.getMonth() + 1;
date = someday.getDate();

date365.innerText = `${year}년 ${month}월 ${date}일`

future = toFirst + 500 * (24 * 60 * 60 * 1000);
someday = new Date(future);
year = someday.getFullYear();
month = someday.getMonth() + 1;
date = someday.getDate();

date500.innerText = `${year}년 ${month}월 ${date}일`