const header = document.querySelector("header");
const headerWhite = document.querySelector(".header--white");
const headerHeight = header.getBoundingClientRect().height;
const logo = header.querySelector(".header-logo img");
const menuText = header.querySelectorAll(".header-nav_name");

let lastScrollY = 0;

function handleHeaderScroll() {
  const scrollY = window.scrollY;
  if (scrollY > lastScrollY) {
    header.style.backgroundColor = "rgba(0, 0, 0, 1)";
    header.classList.remove("hidden");
    header.classList.remove("header--black");
    header.classList.add("header--white");
  } else if (scrollY == 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0)";
    header.classList.remove("hidden");
    logo.src = "src/ant-logo.png";
    header.classList.remove("header--white");
  } else {
    header.classList.add("hidden");
  }
  lastScrollY = scrollY;
}

window.addEventListener("scroll", handleHeaderScroll);
