const reisendemenu = document.getElementById('menu-btn');
const dropdownContent = document.querySelector('.dropdown-content-fc');

reisendemenu.addEventListener("click", () => {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});
