let img1 = document.getElementById("img7");
let img2 = document.getElementById(`img8`);
let img3 = document.getElementById("img9");
let img5 = document.getElementById("img11");

img1.addEventListener("click", () => {
  console.log("nnn");
  document.getElementById("img12").src = document.getElementById(`img7`).src;
});
img2.addEventListener("click", () => {
  document.getElementById("img12").src = document.getElementById(`img8`).src;
});
img3.addEventListener("click", () => {
  document.getElementById("img12").src = document.getElementById(`img9`).src;
});

img5.addEventListener("click", () => {
  document.getElementById("img12").src = document.getElementById(`img11`).src;
});
