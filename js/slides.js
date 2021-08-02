let splide;
const slides = [
  {
    title: "Texto de pantalla Número 1",
    description:
      "Duis nisi augue, facilisis ut luctus et, aliquam ultrices nibh.",
    caption: "headphones",
    img: "./assets/headphones.png",
  },
  {
    title: "Texto de pantalla Número 2",
    description:
      "Duis nisi augue, facilisis ut luctus et, aliquam ultrices nibh.",
    caption: "coins",
    img: "./assets/coins.png",
  },
  {
    title: "Texto de pantalla Número 3",
    description:
      "Duis nisi augue, facilisis ut luctus et, aliquam ultrices nibh.",
    caption: "mustache",
    img: "./assets/mustache.png",
  },
];

const onMoveSlides = (index) => {
  const [buttonNext, buttonsWant] = document.querySelectorAll(
    ".button-next, .buttons-want"
  );
  if (index === 2) {
    buttonNext.style.display = "none";
    buttonsWant.style.display = "flex";
  } else {
    buttonNext.style.display = "block";
    buttonsWant.style.display = "none";
  }
};

const renderSlides = () => {
  const [slide] = document.getElementsByClassName("splide__list");
  const content = slides.reduce(
    (acc, value) =>
      (acc += `<li class="splide__slide">
        <div class="slide-container">
          <div class="header">
            <h3 class="title">${value.title}</h3>
            <p class="description">${value.description}</p>
          </div>
          <div class="image-container">
            <img
              src="${value.img}"
              alt="${value.caption}"
              title="${value.caption}"
            />
          </div>
          <div></div>
        </div>
      </li>`),
    ""
  );
  slide.innerHTML = content;
  splide = new Splide(".splide", {
    arrows: false,
    autoHeight: true,
  }).mount();
  splide.on("move", onMoveSlides);
};

const goToRight = () => {
  splide.go("+1");
};

const goToLeft = () => {
  splide.go("-1");
};

document.addEventListener("DOMContentLoaded", renderSlides);
