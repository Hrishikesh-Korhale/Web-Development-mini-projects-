Window.onload = function(){
    alert('hello');
}

let box = document.getElementById('box');
let boxHeight = box.clientHeight;
let boxWidth = box.clientWidth;

console.log('Hello Word');

box.addEventListener('mousemove',catchme);

function catchme(){
    box.style.top= Math.floor(Math.random()*(window.innerHeight-boxHeight-6))+'px';
    box.style.left = Math.floor(Math.random()*(window.innerWidth-boxHeight-6))+'px';
}