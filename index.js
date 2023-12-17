const axeImg = document.getElementById("axe");
const bockerspreeImg = document.getElementById("bockerspree");

const screamSound = new Audio("./Wilhelm_Scream.ogg");
const mcHit = new Audio("mcHit.mp3");

let hasAxeSwung = false;

const firstAxeSwing = () => {
  axeImg.style.transform = 'rotate(80deg)';

  setTimeout(
    () => {
      screamSound.play();
      axeImg.style.transform = 'rotate(0deg)';
    },
    300);

  hasAxeSwung = true;
};

const subsequentSwing = () => {
  axeImg.style.transition = "transform 0.1s ease-in";
  axeImg.style.transform = 'rotate(80deg)';

  setTimeout(
    () => {
      mcHit.play();
      axeImg.style.transform = 'rotate(0deg)';
    },
    100);
}

const allAxeSwings = () => hasAxeSwung ? subsequentSwing() : firstAxeSwing();

bockerspreeImg.addEventListener("click", allAxeSwings);
axeImg.addEventListener("click", allAxeSwings);