import products from "./products.js"; //모듈 = 레고 완성품을 만들고자 할 때, 개별 요소를 블록. 자바스크립트 언어를 만들고 관리하고 있는 ES기관!! 모듈 표준화x
// CJS=Common JS 모듈
//ESM = Ecma Script 모듈

const button = document.querySelector(".container>button");
const asceBtn = document.querySelector(".ascending");
const descBtn = document.querySelector(".descending");
const newBtn = document.querySelector(".newlisting");

const removeItems = () => {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
  });
};

const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  })
}

const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  })
}

const sortnew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  })
}

const createItem = function (product) {
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
asceBtn.addEventListener("click", sortAsce);
descBtn.addEventListener("click", sortDesc);
newBtn.addEventListener("click", sortnew);