const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//helper functions
//a) showError function
function showError(input, message) {
  //grabbing the parent element to add a class
  const formControl = input.parentElement;
  //now let's manipulate the classes so
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//b)showSuccess function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//c) Check email is valid

function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
//here is another way to validate an email
//   function isValidEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//      return re.test(String(email).toLowerCase());
//   }

// adding event listiner on the entire form for the submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!username.value) {
    showError(username, "username is required");
  } else if (username.value.length <= 2) {
    showError(username, "username should be at least 3 characters long");
  } else {
    showSuccess(username);
  }
  if (!email.value) {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please type in a valid email address");
  } else {
    showSuccess(email);
  }
  if (!password.value) {
    showError(password, "Password is required");
  } else if (password.value.length <= 2) {
    showError(password, "Password should be at least 3 characters long");
  } else {
    showSuccess(password);
  }
  if (!password2.value) {
    showError(password2, "Password2 is required");
  } else if (password2.value.length <= 2) {
    showError(password2, "Password2 should be at least 3 characters long");
  } else {
    showSuccess(password2);
  }
});
