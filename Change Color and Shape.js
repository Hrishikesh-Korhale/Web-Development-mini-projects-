var circle = document.getElementById('circle');
var btnCC = document.getElementById('btnCC');
btnCC.addEventListener('click', function onClick(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
circle.style.backgroundColor= "rgb("+red+","+green+","+blue+")";
})


var btnCS = document.getElementById('btnCS');
var shape1 = document.getElementsByClassName('shape1');

btnCS.addEventListener('click', function changeShape(){
    const shapes = ['innerCircle', 'rectangle', 'triangle'];
const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
cShape = randomShape;
   circle.innerHTML= `<div class="${cShape}"></div>`;
})
console.log("Hello Word");  