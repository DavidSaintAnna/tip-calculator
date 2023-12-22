const inputBill = document.getElementById("bill");
const btnCustom = document.getElementById("custom");
const quantityOfPeople = document.getElementById("people-quantity");
const btnFive = document.getElementById("btn-5");
const btnTen = document.getElementById("btn-10");
const btnFifteen = document.getElementById("btn-15");
const btnTwentyFive = document.getElementById("btn-25");
const btnFifty = document.getElementById("btn-50");
const zeroValidation = document.getElementById("zero-validation");
const tipAmount = document.querySelector(".tip-amount");
const tipValue = document.querySelector(".tip-value");
const btnReset = document.querySelector(".reset");

let price = 0;
let result = 0;
let finalValue = 0;

function updatePrice() {
  price = parseFloat(inputBill.value);
  console.log(price);
}

inputBill.addEventListener("input", updatePrice);

btnFive.addEventListener("click", function () {
  updatePrice();
  this.classList.toggle("clicked");
  btnTen.classList.remove("clicked");
  btnFifteen.classList.remove("clicked");
  btnTwentyFive.classList.remove("clicked");
  btnFifty.classList.remove("clicked");
  result = (price * 5) / 100 + price;
  console.log(result);
});

btnTen.addEventListener("click", function () {
  updatePrice();
  this.classList.toggle("clicked");
  btnFive.classList.remove("clicked");
  btnFifteen.classList.remove("clicked");
  btnTwentyFive.classList.remove("clicked");
  btnFifty.classList.remove("clicked");
  result = (price * 10) / 100 + price;
  console.log(result);
});

btnFifteen.addEventListener("click", function () {
  updatePrice();
  this.classList.toggle("clicked");
  btnTen.classList.remove("clicked");
  btnFive.classList.remove("clicked");
  btnTwentyFive.classList.remove("clicked");
  btnFifty.classList.remove("clicked");
  result = (price * 15) / 100 + price;
  console.log(result);
});

btnTwentyFive.addEventListener("click", function () {
  updatePrice();
  this.classList.toggle("clicked");
  btnTen.classList.remove("clicked");
  btnFive.classList.remove("clicked");
  btnFifteen.classList.remove("clicked");
  btnFifty.classList.remove("clicked");

  result = (price * 25) / 100 + price;
  console.log(result);
});

btnFifty.addEventListener("click", function () {
  updatePrice();
  this.classList.toggle("clicked");
  btnTen.classList.remove("clicked");
  btnFive.classList.remove("clicked");
  btnFifteen.classList.remove("clicked");
  btnTwentyFive.classList.remove("clicked");

  result = (price * 50) / 100 + price;
  console.log(result);
});

btnCustom.addEventListener("input", function () {
  updatePrice();
  const customValue = parseFloat(btnCustom.value);
  result = (price * customValue) / 100 + price;
  console.log(result);
});

quantityOfPeople.addEventListener("input", function () {
  const quantityValue = parseFloat(quantityOfPeople.value);
  if (quantityValue === 0) {
    zeroValidation.classList.remove("hide");
  }
  finalValue = result / quantityValue;
  tipAmount.textContent = Math.ceil((result - price) / quantityValue);
  tipValue.textContent = Math.ceil(finalValue);
});

btnReset.addEventListener("click", function () {
  price = 0;
  result = 0;
  finalValue = 0;
  tipAmount.textContent = 0;
  tipValue.textContent = 0;
  inputBill.value = 0;
  quantityOfPeople.value = 1;
});
