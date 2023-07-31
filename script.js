const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

increaseBtn.addEventListener("click", function () {
  let number = document.querySelector(".num").textContent;
  number++;
  document.querySelector(".num").textContent = number;
});

decreaseBtn.addEventListener("click", function () {
  let number = document.querySelector(".num").textContent;
  number--;
  document.querySelector(".num").textContent = number;
});
resetBtn.addEventListener("click", function () {
  document.querySelector(".num").textContent = 0;
});
