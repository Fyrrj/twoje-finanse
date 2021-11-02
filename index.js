const menuBtn = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu");

let state = false;

const toggleShowMenu = () => {
  state = !state;
  if (state === false) {
    menu.style.top = "-300px";
  } else {
    menu.style.top = "114px";
  }
};

menuBtn.addEventListener("click", toggleShowMenu);
