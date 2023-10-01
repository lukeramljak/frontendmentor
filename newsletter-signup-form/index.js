function validateForm(event) {
  const emailField = document.getElementById("email");
  const errorLabel = document.getElementById("error-label");
  if (emailField.validity.typeMismatch) {
    event.preventDefault();
    emailField.classList.add("invalid");
    errorLabel.classList.remove("hidden");
  }
}

const form = document.querySelector("form");
form.noValidate = true;
form.addEventListener("submit", validateForm);
