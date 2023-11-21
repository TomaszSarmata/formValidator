const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// adding event listiner on the entire form for the submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!username.value) {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
});
