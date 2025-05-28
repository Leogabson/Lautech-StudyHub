const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-target");

    // Toggle active class on nav
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Show matching section, hide others
    sections.forEach((sec) => {
      sec.classList.remove("active");
      if (sec.id === target) sec.classList.add("active");
    });
  });
});

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
  // In real app: clear token/session
  window.location.href = "signup.html";
});
