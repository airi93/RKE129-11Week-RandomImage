const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images =["earth.jpg", "forest.jpg", "sea.jpg", "sky.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let RandomImage = Math.floor (Math.random()* images.length)
    console.log(RandomImage)
    image.src = "images/" + images[RandomImage];
}