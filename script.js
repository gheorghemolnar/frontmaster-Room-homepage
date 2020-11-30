function initialize(index) {
  const sliders = document.querySelectorAll(
    ".main-container div[class*='slider-']"
  );
  for (let i = 0; i < sliders.length; i++) {
    if (i !== index) {
      sliders[i].classList.add("hide-slider");
    }
  }
}

function prevSlide(index) {
  const newIndex = index === 0 ? 2 : index - 1;
  changeSlide(newIndex);
}
function nextSlide(index) {
  const newIndex = (index + 1) % 3;
  changeSlide(newIndex);
}
function changeSlide(index) {
  const sliders = document.querySelectorAll(
    ".main-container div[class*='slider-']"
  );
  for (let i = 0; i < sliders.length; i++) {
    if (i === index) sliders[i].classList.remove("hide-slider");
    else sliders[i].classList.add("hide-slider");
  }
}
