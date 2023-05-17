const headerIcon = document.getElementById("header-icon");
const menu = document.getElementById("menu");

const toggleShowMenu = () => {
  menu.classList.toggle("hideMenu");
};

headerIcon.addEventListener("click", toggleShowMenu);

const home = document.getElementById("homeBTN");
const aboutMe = document.getElementById("AboutMeBTN");
const skills = document.getElementById("skillsBTN");
const projects = document.getElementById("projectsBTN");

window.addEventListener("click", (e) => {
  switch (e.target) {
    case home:
      console.log("le di al home");
      menu.classList.toggle("hideMenu");
      break;

    case aboutMe:
      console.log("le di al home");
      menu.classList.toggle("hideMenu");
      break;

    case skills:
      console.log("le di al home");
      menu.classList.toggle("hideMenu");
      break;

    case projects:
      console.log("le di al home");
      menu.classList.toggle("hideMenu");
      break;

    default:
  }
});
