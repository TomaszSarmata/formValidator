const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//helper functions
function showError(input, message) {
  //grabbing the parent element to add a class
  const formControl = input.parentElement;
  //now let's manipulate the classes so
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// adding event listiner on the entire form for the submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!username.value) {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
});
