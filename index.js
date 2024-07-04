const hamburgerMenu = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("nav-visible");
});
// Add this to your existing index.js file

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const loadMoreButton = document.getElementById("loadMore");
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

  loadMoreButton.addEventListener("click", () => {
    visibleSections += 3;
    showSections();
  });

  // Initial call to show sections
  showSections();
});
