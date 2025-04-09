// section-1
const slideImg = Array.from(document.querySelectorAll('.section-1-img img'));
let counter = 0;
const timer = 2000;

if (slideImg.length > 0) {
  setInterval(() => {
    slideImg[counter].classList.remove("active");

    counter = (counter + 1) % slideImg.length; // boucle infinie

    slideImg[counter].classList.add("active");
  }, timer);
}

// navbar animation
const navbarLinks = document.querySelectorAll(".navbar-link");
const navbarSection = document.querySelector(".navbar-section");
const menu = document.querySelector(".menu");

if (menu && navbarSection && navbarLinks.length > 0) {
  menu.addEventListener("click", () => {
    navbarLinks.forEach(link => link.classList.toggle("active"));
    navbarSection.classList.toggle("active");
  });
}