const hamburgerMenu = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("nav-visible");
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const loadMoreButton = document.getElementById("load-more");
  let visibleSections = 3;

  const showSections = () => {
    sections.forEach((section, index) => {
      if (index < visibleSections) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });

    if (visibleSections >= sections.length) {
      loadMoreButton.style.display = "none";
    }
  };
  loadMoreButton.addEventListener("click", function () {
    visibleSections += 3;
    showSections();
  });
  // Initial call to show sections
  showSections();
});
