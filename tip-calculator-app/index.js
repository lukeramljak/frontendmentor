const billInput = document.getElementById("bill-amount");
const tipButtons = document.querySelectorAll("[data-percentage]");
const customTipButton = document.getElementById("custom-tip");
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const resetButton = document.getElementById("reset-button");

window.addEventListener("DOMContentLoaded", () => {
  resetValues();
});

function resetValues() {
  billInput.value = null;
  customTipButton.value = null;
  peopleInput.value = null;
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";
}

let billAmount = 0;
let selectedPercentage = 0;
let people = 0;

function updateTotals() {
  const tip = billAmount * selectedPercentage;
  const tipPerPerson = tip / people;
  const totalPerPerson = (billAmount + tip) / people;

  // TODO: figure out why this returns infinity

  tipAmount.textContent = `\$${tipPerPerson.toFixed(2)}`;
  total.textContent = `\$${totalPerPerson.toFixed(2)}`;
}

billInput.addEventListener("input", () => {
  billAmount = parseInt(billInput.value);
  updateTotals();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((otherButtons) => {
      otherButtons.classList.remove("selected");
    });
    button.classList.add("selected");
    selectedPercentage = button.getAttribute("data-percentage") / 100;
    updateTotals();
  });
});

// TODO: disable tip buttons if custom tip entered

customTipButton.addEventListener("input", () => {
  selectedPercentage = parseFloat(customTipButton.value) / 100;
  updateTotals();
});

peopleInput.addEventListener("input", () => {
  people = parseInt(peopleInput.value);
});

resetButton.addEventListener("click", () => {
  resetValues();
});
