const navToggle = document.getElementById("nav-toggle");
const navOverlay = document.getElementById("nav-overlay");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling
});

navClose.addEventListener("click", () => {
  navOverlay.classList.remove("active");
  document.body.style.overflow = ""; // Allow scrolling again
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Adjust the scroll threshold as needed
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
});
