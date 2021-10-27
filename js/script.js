// Open menu 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
//  Closing

const navLink = document.querySelectorAll(".nav_links");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}