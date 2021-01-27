const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;


Array.from(colors).forEach((color)=>{color.addEventListener('click',handleColor)})

const INITIAL_COLOR = '#2c2c2c'

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

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

function handleRange(e){
    const size = e.target.value;
    ctx.lineWidth = size;
}

function handleColor(e){
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = ctx.strokeStyle
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,canvas.width,canvas.height)
    }
}

function handleMode(){
    if (filling === true){
        filling = false;
        mode.innerText = 'Fill'
} else {
    filling = true;
    mode.innerText = 'Paint'
}}

if(mode){
    mode.addEventListener('click',handleMode)
}

if(range){
    range.addEventListener('input',handleRange)
}


if (canvas) {
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave',stopPainting);
    canvas.addEventListener('click',handleCanvasClick);
}