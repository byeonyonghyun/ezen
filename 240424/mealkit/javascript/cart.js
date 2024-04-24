const allClear = document.querySelector(".btn-all-clear");
const checkAll = document.querySelector(".cart-items-check-all");
const cartItems = document.querySelector(".cart-items");
const summary = document.querySelector(".cart-items-summary");
const btnOrder = document.querySelector(".btn-order");
const img = document.querySelector(".cart-item-empty");

allClear.addEventListener("click", () => {
  checkAll.style.display = "none";
  cartItems.style.display = "none";
  summary.style.display = "none";
  btnOrder.style.display = "none";
  img.style.display = "block" ;
});

const itemClear = document.querySelectorAll(".cart-content .btn-clear");
const clickedCount = 0;

itemClear.forEach((item) => {
  console.log(cartItems);
  item.addEventListener("click", function() {
    this.parentElement.parentElement.style.display = "none";
    clickedCount++;
    
    if(clickedCount === itemClear.length) {
      checkAll.style.display = "none";
      cartItems.style.display = "none";
      summary.style.display = "none";
      btnOrder.style.display = "none";
      img.style.display = "block" ;
    }
  })
})