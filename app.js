const cupSmall = document.querySelectorAll(".cup-small");
const litres = document.getElementById("liters");
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
}
