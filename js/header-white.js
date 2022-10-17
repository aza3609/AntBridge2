const header = document.querySelector("header");
const headerWhite = document.querySelector(".header--white");
const headerHeight = header.getBoundingClientRect().height;

function handleHeaderScroll() {
  const headerLogo = document.querySelector(".nav-bar__logo");

  if (window.scrollY > headerHeight) {
    header.classList.add("header--white");
    headerLogo.setAttribute("src", "ant-logo.png");
  } else {
    header.classList.remove("header--white");
    headerLogo.setAttribute("src", "ant-logo--white.png");
  }
}

window.addEventListener("scroll", handleHeaderScroll);
