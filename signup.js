const loginToggle = document.getElementById("loginToggle");
const loginForm = document.getElementById("loginForm");

loginToggle.addEventListener("click", () => {
  loginForm.classList.toggle("open");

  if (loginForm.classList.contains("open")) {
    setTimeout(() => {
      loginForm.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }
});

function goToDashboard(event) {
  event.preventDefault();
  // Simulate successful login/signup
  window.location.href = "dashboard.html";
}
