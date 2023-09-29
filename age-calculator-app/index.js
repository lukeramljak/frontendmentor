function setMaxYearOnLoad() {
  const yearInput = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearInput.setAttribute("max", currentYear);
}

function validateForm(e) {
  const form = e.target;

  if (form.checkValidity()) {
    e.preventDefault();
    if (validateMonthInput()) {
      calculateDifference();
      Array.from(form.elements).forEach((i) => {
        i.parentElement.classList.remove("empty", "overflow", "invalid");
      });
    }
  } else {
    e.preventDefault();

    Array.from(form.elements).forEach((i) => {
      if (i.checkValidity()) {
        i.parentElement.classList.remove("empty", "overflow", "invalid");
      } else if (i.validity.valueMissing) {
        i.parentElement.classList.add("empty");
      } else if (i.validity.rangeOverflow) {
        i.parentElement.classList.add("overflow");
        i.parentElement.classList.remove("empty", "invalid");
      }
    });
  }

  if (!validateMonthInput()) {
    e.preventDefault();

    Array.from(form.elements).forEach((i) => {
      i.parentElement.classList.add("invalid");
      i.parentElement.classList.remove("empty", "overflow");
    });
  }
}

function calculateDifference() {
  const yearValue = parseInt(document.getElementById("year").value);
  const monthValue = parseInt(document.getElementById("month").value) - 1;
  const dayValue = parseInt(document.getElementById("day").value);

  const currentDate = new Date();
  const enteredDate = new Date(yearValue, monthValue, dayValue);

  let yearDiff = currentDate.getFullYear() - enteredDate.getFullYear();
  let monthDiff = currentDate.getMonth() - enteredDate.getMonth();
  let dayDiff = currentDate.getDate() - enteredDate.getDate();

  if (dayDiff < 0) {
    monthDiff--;
    dayDiff += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  if (!isNaN(yearDiff, monthDiff, dayDiff)) {
    printValues(yearDiff, monthDiff, dayDiff);
  }
}

function printValues(year, month, day) {
  const yearElement = document.getElementById("result-year");
  const monthElement = document.getElementById("result-month");
  const dayElement = document.getElementById("result-day");

  animateResult(year, yearElement);
  animateResult(month, monthElement);
  animateResult(day, dayElement);
}

function animateResult(input, output) {
  let interval = 600;
  let startValue = 0;
  let endValue = input;
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    output.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function validateMonthInput() {
  const dayValue = parseInt(document.getElementById("day").value);
  const monthValue = parseInt(document.getElementById("month").value);
  const yearValue = parseInt(document.getElementById("year").value);

  const monthsWith30Days = [4, 6, 9, 11];

  if (monthValue === 2) {
    const maxDays = isLeapYear(yearValue) ? 29 : 28;
    if (dayValue > maxDays) {
      return false;
    }
  } else if (monthsWith30Days.includes(monthValue) && dayValue === 31) {
    return false;
  }

  return true;
}

const form = document.querySelector("form");
form.noValidate = true;

window.addEventListener("load", setMaxYearOnLoad);
form.addEventListener("submit", validateForm);
