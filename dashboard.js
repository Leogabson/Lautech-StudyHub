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

const tabButtons = document.querySelectorAll(".thread-tab");
const tabContents = document.querySelectorAll(".thread-tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    // Toggle tab button style
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Toggle tab content
    tabContents.forEach((c) => {
      c.classList.remove("active");
      if (c.id === `${target}-tab`) c.classList.add("active");
    });
  });
});

// invite coursemate simulation link
document.querySelectorAll(".invite-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Invite sent! (Mock)");
  });
});

document.querySelector(".create-group-btn").addEventListener("click", () => {
  alert("Create Group clicked! (Simulated)");
});

// filter
const filters = {
  faculty: document.getElementById("faculty-filter"),
  department: document.getElementById("department-filter"),
  level: document.getElementById("level-filter"),
  semester: document.getElementById("semester-filter"),
};

Object.values(filters).forEach((select) => {
  select.addEventListener("change", () => {
    // Combine all selected values and fetch filtered data
    const query = {
      faculty: filters.faculty.value,
      department: filters.department.value,
      level: filters.level.value,
      semester: filters.semester.value,
    };
    console.log("Filter changed:", query);
    // TODO: Fetch filtered data from backend
  });
});
