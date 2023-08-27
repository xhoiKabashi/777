const btn = document.querySelector(".btn");
const slotCards = document.querySelectorAll(".slotCard");
const slotCard1 = document.querySelector(".slotCard1");

const arr = [];

// to get the random number and return it to a specific foto

function randomNumber() {
  const num = Math.ceil(Math.random() * 5);
  if (num == 1) {
    return `<img src="./img/bar.png" alt="" height="80px" width="80px">`;
  } else if (num == 2) {
    return `<img src="./img/cerry.jpg" alt="" height="80px" width="80px">`;
  } else if (num == 3) {
    return `<img src="./img/lemon.jpg" alt="" height="80px" width="80px">`;
  } else if (num == 4) {
    return `<img src="./img/seven.jpg" alt="" height="80px" width="80px">`;
  } else if (num == 5) {
    return `<img src="./img/seven.jpg" alt="" height="80px" width="80px">`;
  }
}


// display th///

btn.addEventListener(
  "click",
  function () {
    playAudio();
    for (const slotCard of slotCards) {
      slotCard.innerHTML = randomNumber();
    }
  },
  3000
);

// to play audio

function playAudio() {
  let audio = new Audio("./audio/audio.wav");
  audio.play();
}
