const headerIcon = document.getElementById("header-icon");
const menu = document.getElementById("menu");

const toggleShowMenu = () => {
  menu.classList.toggle("hideMenu");
};


headerIcon.addEventListener("click", toggleShowMenu);
