const projectBackgroundImg = document.querySelector(
  ".main-projects__content img"
);
const bitseDiv = document.querySelector(".main-projects__item:first-child");
const codexDiv = document.querySelector(".main-projects__item:nth-child(2)");
const superEyeDiv = document.querySelector(".main-projects__item:nth-child(3)");
const rokitsDiv = document.querySelector(".main-projects__item:nth-child(4)");

function ShowText(event) {
  event.target.querySelector("h5").classList.remove("hidden");
  event.target.querySelector("a span").classList.remove("hidden");
  event.target.querySelector("a ion-icon").classList.remove("hidden");
}
function hideText(a) {
  a.querySelector("h5").classList.add("hidden");
  a.querySelector("a span").classList.add("hidden");
  a.querySelector("a ion-icon").classList.add("hidden");
}

function handdleBitseHover(event) {
  ShowText(event);
  projectBackgroundImg.src = "src/main/project-01.png";
  hideText(codexDiv);
  hideText(superEyeDiv);
  hideText(rokitsDiv);
}

function handdleCodexHover(event) {
  ShowText(event);
  projectBackgroundImg.src = "src/main/project-02.png";
  hideText(bitseDiv);
  hideText(superEyeDiv);
  hideText(rokitsDiv);
}
function handdleSuperEyeHover(event) {
  ShowText(event);
  projectBackgroundImg.src = "src/main/project-03.png";
  projectBackgroundImg.style.transition = "all 0.5s ease-in-out";
  hideText(bitseDiv);
  hideText(codexDiv);
  hideText(rokitsDiv);
}
function handdleRokitsHover(event) {
  ShowText(event);
  projectBackgroundImg.src = "src/main/project-04.png";
  hideText(bitseDiv);
  hideText(codexDiv);
  hideText(superEyeDiv);
}

bitseDiv.addEventListener("mouseenter", handdleBitseHover);

codexDiv.addEventListener("mouseenter", handdleCodexHover);

superEyeDiv.addEventListener("mouseenter", handdleSuperEyeHover);

rokitsDiv.addEventListener("mouseenter", handdleRokitsHover);
