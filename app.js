const showNav = document.getElementById("show-nav");
const hideNav = document.getElementById("hide-nav");
const mobileMenuLinks = document.getElementById("mobile-nav-links");
const mobileMenu = document.getElementById("my-mobile-menu");

function toggleMenu() {
  mobileMenu.classList.toggle("show-menu");
}

function scrollToSection(event) {
  event.preventDefault();

  const link = event.target;
  const targetID = link.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetID);
  targetSection.scrollIntoView({ behavior: "smooth" });
  mobileMenu.classList.remove("show-menu");
}

showNav.addEventListener("click", toggleMenu);
hideNav.addEventListener("click", toggleMenu);
mobileMenuLinks.addEventListener("click", toggleMenu);

Array.from(mobileMenuLinks).forEach(function(link) {
  link.addEventListener("click", scrollToSection);
});
