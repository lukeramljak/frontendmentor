const billAmount = document.getElementById("bill-amount");
const tipButtons = document.querySelectorAll("[data-percentage]");
const customTipButton = document.getElementById("custom-tip");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const resetButton = document.getElementById("reset-button");

tipButtons.forEach((button) => {
  button.addEventListener("click", () =>
    console.log(button.dataset.percentage)
  );
});
