
document.addEventListener(„DOMContentLoaded”, function() {
  const loginForm = document.getElementById(„loginForm”);

  loginForm.addEventListener(„submit”, function(event) {
    event.preventDefault();

    const email = document.getElementById(„email”).value;
    const password = document.getElementById(„password”).value;

    if (email && password) {
      alert(„Logowanie udane!”);
    } else {
      alert(„Proszę wypełnić wszystkie pola!”);
    }
  });

  const submitButton = document.querySelector(„button[type=‚submit’]”);

  submitButton.addEventListener(„click”, function() {
    submitButton.style.backgroundColor = „#28a745”;
  });
});
