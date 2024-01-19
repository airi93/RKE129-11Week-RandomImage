const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToChooseFrom = document.querySelectorAll(".gallery img");

console.log(imagesToChooseFrom);

imagesToChooseFrom.forEach (img => img.addEventListener('click', imageClick));

function imageClick(e) {
  imagesToChooseFrom.forEach (img => img.style.opasity=1)
    currentMainImage.src=e.target.src;
    e.target.style.opasity=0.5;
}