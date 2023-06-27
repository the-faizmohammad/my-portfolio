const navShow = document.getElementById("show-nav");
const navHide = document.getElementById("hide-nav");
const mobMenuLinks = document.querySelectorAll("#mobmenu-links li a");
const mobileMenu = document.getElementById("mobile-menu");
//Aamer code

//Aamer code

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
