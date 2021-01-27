const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

// canvas.width = document.querySelector('.canvas');
// canvas.height = document.querySelector('.canvas');

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

console.log(document.getElementsByClassName("canvas"))

// canvas.width = 700;
// canvas.height = 700;


ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting () {
    painting = false;
}

function startPainting () {
    painting = true;
}

function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}


if (canvas) {
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave',stopPainting);
}