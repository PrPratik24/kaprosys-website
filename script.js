const images = [
    "assets/images/bg1.jpg",
    "assets/images/bg3.jpg",
    "assets/images/bg4.jpg"
];

let index = 0;

function changeBackground() {
    document.querySelector(".hero").style.backgroundImage =
        `url(${images[index]})`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 3000);
changeBackground();
