let drop = document.querySelector(".dropdown");
let dropMenu = document.querySelector(".drop-menu");
let servicesLink = dropMenu.querySelector("a");

servicesLink.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  drop.classList.toggle("show");
  dropMenu.classList.toggle("dropdown-active");
});

// Close dropdown when clicking on dropdown items
let dropdownItems = drop.querySelectorAll("li a");
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    drop.classList.remove("show");
    dropMenu.classList.remove("dropdown-active");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (!dropMenu.contains(e.target)) {
    drop.classList.remove("show");
    dropMenu.classList.remove("dropdown-active");
  }
});

let opennav = document.querySelector("#open");
let closenav = document.querySelector("#menu-close");
let navbar = document.querySelector(".navbar");

opennav.addEventListener("click", function () {
  navbar.classList.add("active");
  opennav.style.display = "none";
  closenav.style.display = "block";
  document.body.classList.add("menu-open");
});
closenav.addEventListener("click", function () {
  navbar.classList.remove("active");
  opennav.style.display = "flex";
  closenav.style.display = "none";
  document.body.classList.remove("menu-open");
});
