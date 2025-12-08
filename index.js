// when hovering on the text it glows
const aboutTexts = document.querySelectorAll(".about-section p");

aboutTexts.forEach(p => {
    p.addEventListener("mouseenter", () => {
        p.style.color = "#00eaff";
    });

    p.addEventListener("mouseleave", () => {
        p.style.color = "";
    });
});
// on clicking the about heading
const title = document.querySelector(".about-section h1");

if (title) {
    title.addEventListener("click", () => {
        title.style.textShadow = "0 0 20px #00ffff";
    });
}
// about section box fades when the page loades
const aboutBox = document.querySelector(".about-section");

if (aboutBox) {
    aboutBox.style.opacity = "0";

    window.onload = function () {
        aboutBox.style.transition = "1.5s";
        aboutBox.style.opacity = "1";
    };
}



