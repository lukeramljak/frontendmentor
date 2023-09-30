function setMaxYearOnLoad() {
  const yearInput = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearInput.setAttribute("max", currentYear);
}

function validateForm(e) {
  const form = e.target;

  function updateClassList(element, addClass, removeClass) {
    const classList = element.parentElement.classList;

    classList.add(...addClass);
    classList.remove(...removeClass);
  }

  if (!validateMonthInput()) {
    e.preventDefault();
    Array.from(form.elements).forEach((i) => {
      updateClassList(i, ["invalid"], ["empty", "overflow"]);
    });
  }

  if (!form.checkValidity()) {
    e.preventDefault();
    Array.from(form.elements).forEach((i) => {
      if (i.validity.valueMissing) {
        updateClassList(i, ["empty"], []);
      } else if (i.validity.rangeOverflow) {
        updateClassList(i, ["overflow"], ["empty", "invalid"]);
      }
    });
  } else if (validateMonthInput()) {
    e.preventDefault();
    calculateDifference();
    Array.from(form.elements).forEach((i) => {
      updateClassList(i, [], ["empty", "overflow", "invalid"]);
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
    if (startValue == endValue) {
      clearInterval(counter);
    } else if (endValue == 0) {
      clearInterval(counter);
    }
  }, duration);
}

function validateMonthInput() {
  const dayValue = parseInt(document.getElementById("day").value);
  const monthValue = parseInt(document.getElementById("month").value);
  const yearValue = parseInt(document.getElementById("year").value);

  const monthsWith30Days = [4, 6, 9, 11];

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

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
