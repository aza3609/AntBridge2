const mainBusinessContent = document.querySelector(".main-business__content");
const imagingTechnologyDiv = document.querySelector(
  ".main-business__item:first-child"
);
const applicationSoftwareDiv = document.querySelector(
  ".main-business__item:nth-child(2)"
);
const integrationControlDiv = document.querySelector(
  ".main-business__item:nth-child(3)"
);

function zoomIn(event) {
  event.target.style.width = "66%";
  event.target.style.transition = "all 0.5s ease-in-out";
}

function zooOut(event) {
  event.target.style.width = "33%";
  event.target.style.transition = "all 0.5s ease-in-out";
}

imagingTechnologyDiv.addEventListener("mouseenter", zoomIn);
applicationSoftwareDiv.addEventListener("mouseenter", zoomIn);
integrationControlDiv.addEventListener("mouseenter", zoomIn);
imagingTechnologyDiv.addEventListener("mouseleave", zooOut);
applicationSoftwareDiv.addEventListener("mouseleave", zooOut);
integrationControlDiv.addEventListener("mouseleave", zooOut);
