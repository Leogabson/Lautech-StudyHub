const featuresSection = document.getElementById("features");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        featuresSection.classList.add("visible");
        observer.unobserve(featuresSection);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

observer.observe(featuresSection);
