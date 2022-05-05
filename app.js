const cupSmall = document.querySelectorAll(".cup-small");
const litres = document.getElementById("litres"); //using .getElementsbyClassName didnt work; changed it to id;
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

cupSmall.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  // add toggle
  if (
    cupSmall[idx].classList.contains("full") &&
    !cupSmall[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  cupSmall.forEach((cup, i) => {
    if (i <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  upDateBigCup();
}

function upDateBigCup() {
  const numFullCups = document.querySelectorAll(".cup.cup-small.full").length;
  const numCups = cupSmall.length;

  if (numFullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(330 * numFullCups) / numCups}px`;
    percentage.innerText = `${(numFullCups / numCups) * 100}%`;
  }
  if (numFullCups === numCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    litres.innerText = `${2 - (numFullCups * 250) / 1000}L`;
  }
}
