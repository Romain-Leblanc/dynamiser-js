let canvasDom = document.getElementById("canvas-de");
let ctx = canvasDom.getContext("2d");

ctx.strokeStyle = "transparent";
ctx.fillStyle = "red";

ctx.beginPath();
ctx.rect(1, 1, 100, 100);
ctx.stroke();

// Dé n°1
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath();