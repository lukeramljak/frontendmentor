const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  validateFields();
});

function validateFields() {
  const inputFields = document.querySelectorAll(".input-field");

  inputFields.forEach((field) => {
    const label = field.parentElement.querySelector(".input-label");
    const errorMessage = document.createElement("span");
    const existingError = field.parentElement.querySelector(".error-message");

    errorMessage.classList.add("error-message");
    errorMessage.textContent = "This field is required";

    if (field.value === "" || field.value === "0") {
      label.classList.add("error-label");
      field.classList.add("error-input");
      if (!existingError) {
        field.insertAdjacentElement("afterend", errorMessage);
      }
    } else {
      label.classList.remove("error-label");
      field.classList.remove("error-input");
      if (existingError) {
        existingError.remove();
      }
    }
  });
}
