const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const  colors = ["red", "blue", "green", "yellow"];

myButton.addEventListener('click', changeColor)

function changeColor () {

    let RandomIndex = Math.floor (Math.random()* colors.length)
    console.log(RandomIndex)
    myBox.style.backgroundColor = colors[RandomIndex];
}