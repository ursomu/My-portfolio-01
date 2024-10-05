const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

// Toggle the visibility of the nav when clicking the hamburger menu
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("show");
});
