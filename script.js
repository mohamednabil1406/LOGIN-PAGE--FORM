// Save login state in localStorage

function loginUser(event) {
  event.preventDefault();
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "home.html"; 
}

function signupUser(event) {
  event.preventDefault();
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "home.html"; 
}

function checkLogin() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn || isLoggedIn !== "true") {
    window.location.href = "index.html"; 
  }
}

function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}
