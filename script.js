const range = document.querySelectorAll(".range input");
const price = document.querySelectorAll(".input-field input");
const progress = document.querySelector(".slider .progress");

let difference = 2000;

const marginLeft = (min) => (min / range[0].max) * 100 + "%";
const marginRight = (max) => 100 - (max / range[0].max) * 100 + "%";

const onChangeRange = (e) => {
  let min = parseInt(range[0].value);
  let max = parseInt(range[1].value);

  if (max - min < difference) {
    if (e.target.className == "min-range") {
      range[0].value = max - difference;
    } else {
      range[1].value = min + difference;
    }
  } else {
    price[0].value = min;
    price[1].value = max;
    progress.style.left = marginLeft(min);
    progress.style.right = marginRight(max);
  }
};

const onChangeInput = (e) => {
  let min = parseInt(price[0].value);
  let max = parseInt(price[1].value);

  if (max - min >= difference && max <= 15000) {
    if (e.target.className == "min-input") {
      range[0].value = min;
      progress.style.left = marginLeft(min);
    } else {
      range[1].value = max;
      progress.style.right = marginRight(max);
    }
  }
};
