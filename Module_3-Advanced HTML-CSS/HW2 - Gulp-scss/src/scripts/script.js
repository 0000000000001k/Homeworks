const menuToggleButton = document.querySelector(".header__menu-dropdown-btn");
const menuDropdown = document.querySelector(".header__menu-dropdown");
const menuNavigation = document.querySelector(".header__nav");
menuToggleButton.addEventListener("click", () => {
  console.log(true);
  menuDropdown.classList.toggle("active");
  menuToggleButton.classList.toggle("active");
  menuNavigation.classList.toggle("active");
});
