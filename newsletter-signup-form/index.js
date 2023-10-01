const setError = (element, message) => {
  const inputContainer = element.parentElement;
  const errorDisplay = document.querySelector(".error");

  errorDisplay.textContent = message;
  inputContainer.classList.add("invalid");
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
    showModal();
  }
};

const showModal = () => {
  const form = document.querySelector(".form-container");
  const modal = document.querySelector(".success-modal");
  const email = document.getElementById("email");
  const userEmail = document.getElementById("submitted-email");
  form.classList.add("hidden");
  modal.classList.remove("hidden");
  userEmail.textContent = email.value;
};

const resetForm = () => {
  const form = document.querySelector(".form-container");
  const modal = document.querySelector(".success-modal");
  const email = document.getElementById("email");
  form.classList.remove("hidden");
  modal.classList.add("hidden");
  email.value = "";
};

const form = document.getElementById("form");
const email = document.getElementById("email");
const dismissButton = document.getElementById("dismiss");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

dismissButton.addEventListener("click", resetForm);
