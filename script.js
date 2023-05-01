const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;

slide = (direction) => {
  direction === "next"
    ? (translate -= translateAmount)
    : (translate += translateAmount);
};

pages.forEach((pages) => (pages.style.transform = `translateX(${translate}%)`));

// Loading animation
let load = 0;

let int = setInterval(blurring, 15);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
