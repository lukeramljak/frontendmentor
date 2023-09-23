const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const submitButton = document.getElementById("submit");

const dayLabel = document.querySelector('[for="day"]');
const monthLabel = document.querySelector('[for="month"]');
const yearLabel = document.querySelector('[for="year"]');

const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");

const date = new Date();

submitButton.addEventListener("click", () => {
  checkForEmptyFields();
});

function checkForEmptyFields() {
  if (dayInput.value == "" || dayInput.value == "0") {
    dayLabel.classList.add("label-error");
    dayInput.classList.add("input-error");
    dayError.style.display = "block";
  } else {
    dayLabel.classList.remove("label-error");
    dayInput.classList.remove("input-error");
    dayError.style.display = "none";
  }

  if (monthInput.value == "" || monthInput.value == "0") {
    monthLabel.classList.add("label-error");
    monthInput.classList.add("input-error");
    monthError.style.display = "block";
  } else {
    monthLabel.classList.remove("label-error");
    monthInput.classList.remove("input-error");
    monthError.style.display = "none";
  }

  if (yearInput.value == "" || yearInput.value == "0") {
    yearLabel.classList.add("label-error");
    yearInput.classList.add("input-error");
    yearError.style.display = "block";
  } else {
    yearLabel.classList.remove("label-error");
    yearInput.classList.remove("input-error");
    yearError.style.display = "none";
  }
}
