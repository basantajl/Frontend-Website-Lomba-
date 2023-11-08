let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector("#.navbar")

menu.oneClick = () => {
  menu.classList.toggle("bx-x")
  navbar.classList.toggle("open")
}
