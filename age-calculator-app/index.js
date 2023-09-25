const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  validateFields();
});

function checkForEmpty() {
  const inputFields = document.querySelectorAll(".input-item input");

  inputFields.forEach((field) => {
    if (field.value === "") {
      addErrors(field, "This field is required");
    } else {
      removeErrors(field);
    }
  });
}

function addErrors(field, error) {
  const label = field.parentElement.querySelector(".input-label");
  const errorMessage = document.createElement("span");
  const existingError = field.parentElement.querySelector(".error-message");

  errorMessage.classList.add("error-message");
  errorMessage.textContent = error;

  label.classList.add("error-label");
  field.classList.add("error-input");
  if (!existingError) {
    field.insertAdjacentElement("afterend", errorMessage);
  }
}

function removeErrors(field) {
  const label = field.parentElement.querySelector(".input-label");
  const existingError = field.parentElement.querySelector(".error-message");

  label.classList.remove("error-label");
  field.classList.remove("error-input");
  if (existingError) {
    existingError.remove();
  }
}

function validateDateField() {
  const day = parseInt(document.getElementById("day").value);
  if (day < 1 || day > 31) {
    console.log("works");
  }
}

function validateFields() {
  checkForEmpty();
  validateDateField();
}
