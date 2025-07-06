const section = document.querySelector("section");
section.innerHTML = `
<div style="display: flex; align-items: center; gap: 20px;">
<button type="button" id="left"> < </button>
<img id="carousel-img" src="" alt="" width="600" object-fit="cover">
<button type="button" id="right"> > </button>
</div>`;

const imagePaths = [
    "./carroussel/images/pexels-edwin-soby-2150975761-31496663.jpg",
  "./carroussel/images/pexels-hub-jacqu-750015482-29032250.jpg",
  "./carroussel/images/pexels-marinca-liviu-940909768-20064489.jpg",
];

section.style.textAlign ="center";
let changer = 0;

function changerImage() {
  const img = document.getElementById("carousel-img");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = imagePaths[changer];
    img.style.opacity = 1;
    
  }, 200); 
}

function carroussel(direction) {
  if (direction === 'left') {
    changer = (changer - 1 + imagePaths.length) % imagePaths.length;
  } else if (direction === 'right') {
    changer = (changer + 1) % imagePaths.length;
  }
  changerImage();
}

document.getElementById("left").addEventListener("click", () => carroussel('left'));
document.getElementById("right").addEventListener("click", () => carroussel('right'));

changerImage();

section.style.marginLeft = "33%";


const app = document.getElementById("div");




