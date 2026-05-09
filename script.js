const images = [
    "assets/images/bg1.jpg",
    "assets/images/bg2.jpg",
    "assets/images/bg3.jpg"
];

let index = 0;

function changeBackground() {

    document.querySelector(".hero").style.backgroundImage =
        `url('${images[index]}')`;

    index = (index + 1) % images.length;
}

setInterval(changeBackground, 4000);

changeBackground();

/* MOBILE MENU */

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
