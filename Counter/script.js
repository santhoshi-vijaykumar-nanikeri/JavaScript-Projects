const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const counter = document.querySelector(".counter");
const changeVal = document.querySelector(".change-val");
const reset = document.querySelector(".reset");

plusBtn.addEventListener("click", () => {
  const counterVal = parseInt(counter.innerText);
  counter.innerText = counterVal + parseInt(changeVal.value);
});
minusBtn.addEventListener("click", () => {
  const counterVal = parseInt(counter.innerText);
  counter.innerText = counterVal - parseInt(changeVal.value);
});

reset.addEventListener("click", () => {
  counter.innerText = 0;
});
