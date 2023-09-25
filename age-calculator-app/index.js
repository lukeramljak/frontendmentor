const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  validateFields();
});

function addErrorToInput(inputElement, inputLabel, errorMessage) {
  const labelElement = document.querySelector(`[for="${inputLabel}"]`);
  const errorSpan = document.createElement("span");
  const existingError =
    inputElement.parentElement.querySelector(".error-message");

  if (!existingError) {
    labelElement.classList.add("error-label");
    inputElement.classList.add("error-input");

    errorSpan.classList.add("error-message");
    errorSpan.textContent = errorMessage;
    inputElement.insertAdjacentElement("afterend", errorSpan);
  }
}

function removeErrorFromInput(inputElement, inputLabel) {
  const labelElement = document.querySelector(`[for="${inputLabel}"]`);
  const existingError =
    inputElement.parentElement.querySelector(".error-message");

  if (existingError) {
    labelElement.classList.remove("error-label");
    inputElement.classList.remove("error-input");
    existingError.remove();
  }
}

function checkInputsForEmpty() {
  const inputElements = document.querySelectorAll(".input-item input");

  inputElements.forEach((inputElement) => {
    const labelName = inputElement.name;

    if (inputElement.value === "") {
      addErrorToInput(inputElement, labelName, "This field is required");
    } else {
      removeErrorFromInput(inputElement, labelName);
    }
  });
}

function validateDateInput() {
  const dayElement = document.getElementById("day");
  const dayToNum = parseInt(day.value);
  if (dayToNum < 1 || dayToNum > 31) {
    addErrorToInput(dayElement, day.id, "Must be a valid day");
  }
}

function validateMonthInput() {
  const monthElement = document.getElementById("month");
  const monthToNum = parseInt(month.value);
  if (monthToNum < 1 || monthToNum > 12) {
    addErrorToInput(monthElement, month.id, "Must be a valid month");
  }
}

function validateYearInput() {
  const yearElement = document.getElementById("year");
  const yearToNum = parseInt(year.value);
  const currentDate = new Date();
  if (yearToNum > currentDate.getFullYear()) {
    addErrorToInput(yearElement, year.id, "Must be in the past");
  }
}

function validateFields() {
  checkInputsForEmpty();
  validateDateInput();
  validateMonthInput();
  validateYearInput();
}
