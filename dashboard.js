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

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    // In real app: clear token/session
    window.location.href = "signup.html";
  });
}

// ===== Course Card Click → Thread View =====
const courseCards = document.querySelectorAll(".course-card");
const courseThreadSection = document.getElementById("course-thread-section");
const coursesSection = document.getElementById("courses-section");
const backToCourses = document.getElementById("backToCourses");

if (courseCards && courseThreadSection && backToCourses) {
  courseCards.forEach((card) => {
    card.addEventListener("click", () => {
      sections.forEach((sec) => sec.classList.remove("active"));
      courseThreadSection.classList.add("active");
    });
  });

  backToCourses.addEventListener("click", () => {
    sections.forEach((sec) => sec.classList.remove("active"));
    coursesSection.classList.add("active");
  });
}
