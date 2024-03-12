fetch('https://dummyjson.com/quotes')
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#reslut");
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerText = data.quote[random]
  });