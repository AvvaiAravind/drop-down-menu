import "./style.css"; /*  for importing style.css */

const dropDownBtn = document.getElementById("dropdown-btn");
const dropDownMenu = document.getElementById("dropdown-menu");
const toggleArrow = document.querySelector(".fa-caret-up");
function toggleDropdown() {
  dropDownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow-down");
}

dropDownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", (e) => {
  e.stopPropagation();
  if (dropDownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});
