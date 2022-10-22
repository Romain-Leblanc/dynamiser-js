let canvasDom = document.getElementById("canvas-de");
let ctx = canvasDom.getContext("2d");

let angleStart = 0;
let angleEnd = Math.PI * 2;

ctx.strokeStyle = "transparent";
ctx.fillStyle = "red";

// Carré
ctx.beginPath();
ctx.rect(1, 1, 100, 100);
ctx.stroke();

// Dé n°1
function un() {
    ctx.beginPath();
    ctx.arc(50, 50, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

// Dé n°2
function deux() {
    ctx.beginPath();
    ctx.arc(25, 25, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 75, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

// Dé n°3
function trois() {
    ctx.beginPath();
    ctx.arc(25, 25, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(50, 50, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 75, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

// Dé n°4
function quatre() {
    ctx.beginPath();
    ctx.arc(25, 25, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(25, 75, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 25, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 75, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

// Dé n°5
function cinq() {
    ctx.beginPath();
    ctx.arc(25, 25, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(25, 75, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(50, 50, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 25, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 75, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

// Dé n°6
function six() {
    ctx.beginPath();
    ctx.arc(25, 25, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(25, 50, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(25, 75, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 25, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 50, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 75, 10, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}