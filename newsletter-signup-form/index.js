const form = document.getElementById("form");
const email = document.getElementById("email");

const setError = (element, message) => {
  const inputContainer = element.parentElement;
  const errorDisplay = document.querySelector(".error");

  errorDisplay.textContent = message;
  inputContainer.classList.add("invalid");
};

const setValid = (element) => {
  const inputContainer = element.parentElement;
  const errorDisplay = document.querySelector(".error");

  errorDisplay.textContent = "";
  inputContainer.classList.remove("invalid");
};

const isValidEmail = (email) => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return re.test(String(email).toLowerCase());
};

const validateForm = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Valid email required");
  } else {
    setValid(email);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});
