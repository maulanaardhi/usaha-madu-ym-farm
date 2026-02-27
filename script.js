// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika honey menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav\

const honey = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!honey.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
