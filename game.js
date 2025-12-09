window.onload = function () {
    alert("Welcome to Neon Veil!");
};
// shadow added to the image on home page
const img=document.getElementById("homeImg");
img.addEventListener("mouseenter",function(){
    img.style.boxShadow="0 0 30px #00eaff";
});
img.addEventListener("mouseleave", function () {
    img.style.boxShadow = "none";
});
