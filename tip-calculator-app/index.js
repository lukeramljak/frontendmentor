const billInput = document.getElementById("bill-amount");
const tipButtons = document.querySelectorAll("[data-percentage]");
const customTipInput = document.getElementById("custom-tip");
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total");
const resetButton = document.getElementById("reset-button");

window.addEventListener("DOMContentLoaded", () => {
  resetValues();
});

function resetValues() {
  billInput.value = null;
  tipButtons.forEach((button) => {
    button.classList.remove("selected");
  });
  customTipInput.value = null;
  peopleInput.value = null;
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
}

let billAmount = 0;
let selectedPercentage = 0;
let amountOfPeople = 0;

function updateTotals() {
  const tip = billAmount * selectedPercentage;
  const tipPerPerson = tip / amountOfPeople;
  const totalPerPerson = (billAmount + tip) / amountOfPeople;

  tipAmount.textContent = `\$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `\$${totalPerPerson.toFixed(2)}`;
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

customTipInput.addEventListener("input", () => {
  selectedPercentage = parseFloat(customTipInput.value) / 100;
  updateTotals();
});

peopleInput.addEventListener("input", () => {
  amountOfPeople = parseInt(peopleInput.value);
  updateTotals();
});

resetButton.addEventListener("click", () => {
  resetValues();
});
