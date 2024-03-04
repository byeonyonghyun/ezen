import products from "./products.js"; //모듈 = 레고 완성품을 만들고자 할 때, 개별 요소를 블록. 자바스크립트 언어를 만들고 관리하고 있는 ES기관!! 모듈 표준화x
// CJS=Common JS 모듈
//ESM = Ecma Script 모듈

const button = document.querySelector("button");

const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");
  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.className = "name";
  h3.innerText = product.name;

  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW"
  }).format(product.price);

  span.className = "price"
  span.innerText = price;

  div.append(h3, span);
  li.append(img, div);
  ul.appendChild(li);
}

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

button.addEventListener("click", importData);