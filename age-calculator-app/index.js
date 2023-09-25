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

function validateInput(inputElement, minValue, maxValue, errorMessage) {
  const inputToNum = parseInt(inputElement.value);
  if (inputToNum < minValue || inputToNum > maxValue) {
    addErrorToInput(inputElement, inputElement.id, errorMessage);
  }
}

function validateDateInput() {
  validateInput(document.getElementById("day"), 1, 31, "Must be a valid day");
}

function validateMonthInput() {
  validateInput(
    document.getElementById("month"),
    1,
    12,
    "Must be a valid month"
  );
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

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  validateFields();
});

const inputContainerElement = document.querySelector(".input-container");
inputContainerElement.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    validateFields();
  }
});
