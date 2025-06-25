const login = document.getElementById("Login");
const password = document.getElementById("password");
const email = document.getElementById("email");
const queryInput1 = document.getElementById("query1");
const queryInput2 = document.getElementById("query2");
const queryInput3 = document.getElementById("query3");

login.addEventListener("click", () => {
  if (
    email.value &&
    password.value &&
    queryInput1.value &&
    queryInput2.value &&
    queryInput3.value
  ) {
    // Salva le query nel localStorage
    localStorage.setItem("userQuery1", queryInput1.value.trim());
    localStorage.setItem("userQuery2", queryInput2.value.trim());
    localStorage.setItem("userQuery3", queryInput3.value.trim());
    window.location.assign("home.html");
  } else {
    alert("Email/Password errati");
  }
});
