const sidebar = document.querySelector(".sidebar");
const closeIcon = document.getElementsByClassName("close-icon").item(0); // HTMLCollection
const sidebarChanger = document.querySelector(".sidebar-changer");
sidebarChanger.onclick = function () {
  sidebar.classList.toggle("closed");
};
closeIcon.onclick = function () {
  sidebar.classList.add("closed");
};
