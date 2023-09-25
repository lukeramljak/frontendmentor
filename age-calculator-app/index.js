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

// function validateDateField() {
//   const day = parseInt(document.getElementById("day").value);
//   if (day < 1 || day > 31) {
//     addErrorToInput(day, "Must be a valid day");
//   }
// }

function validateFields() {
  checkInputsForEmpty();
  // validateDateField();
}
