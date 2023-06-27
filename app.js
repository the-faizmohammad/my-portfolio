const navigationShow = document.getElementById("show-nav");
const navigationHide = document.getElementById("hide-nav");
const mobMenuLinks = document.querySelectorAll("#mobmenu-links li a");
const mobileMenu = document.getElementById("mobile-menu");

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("mobile-menu--show");
};

navigationShow.addEventListener("click", toggleMobileMenu);
navigationHide.addEventListener("click", toggleMobileMenu);

mobMenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetID = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    mobileMenu.classList.remove("mobile-menu--show");
  });
});
