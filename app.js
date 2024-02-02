var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sideBar");
var container = document.querySelector(".container");

menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
};
