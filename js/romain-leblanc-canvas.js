// Récupère l'élement du DOM pour le canvas
let canvasDom = document.getElementById("canvas-de");
// Récupère son contexte
let ctx = canvasDom.getContext("2d");

// Initialisation les couleurs utiles
let black = "black";
let white = "white";
let red = "red";
let transparent = "transparent";

// Définit les coordonnées de départ du carré
let xStart, yStart;
xStart = yStart = 1;

// Définit les dimensions du carré
let width, height;
width = height = 100;

// Définit l'angle final utilisé pour les cercles
let angleStart = 0;
let angleEnd = Math.PI * 2;

// Initialise la couleur du carré
ctx.strokeStyle = transparent;
// Initialise la couleur des contours du cercle
ctx.fillStyle = red;

/**
 * Génère un carré pour l'affichage des dés
 */
 function genererCarre() {
    ctx.beginPath();
    ctx.rect(xStart, yStart, width, height);
    ctx.stroke();
}

// Génère un arc de cercle avec les paramètres fournis
 function genererArc(x, y, rayon, angleStart, angleEnd) {
    ctx.arc(x, y, rayon, angleStart, angleEnd);
    ctx.stroke();
    ctx.fill();
}

// Génère un point rouge qui permet de préciser quel joueur joue le tour actuel
function pointRouge(numeroJoueur) {
    let canvasPointRougeDom = document.getElementById(`canvas-tour-joueur-${numeroJoueur}`);
    let cpr = canvasPointRougeDom.getContext("2d");
    cpr.beginPath();
    cpr.arc(9, 9, 8, angleStart, angleEnd);
    cpr.fillStyle = red;
    cpr.fill();
    cpr.strokeStyle = red;
    cpr.stroke();
    cpr.closePath();
}

// Génère le dé n°1
function un() {
    genererCarre();
    ctx.beginPath();
    genererArc(50, 50, 10, angleStart, angleEnd);
    ctx.closePath();
}

// Génère le dé n°2
function deux() {
    genererCarre();
    ctx.beginPath();
    genererArc(25, 25, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(75, 75, 10, angleStart, angleEnd);
    ctx.closePath();
}

// Génère le dé n°3
function trois() {
    genererCarre();
    ctx.beginPath();
    genererArc(25, 25, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(50, 50, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(75, 75, 10, angleStart, angleEnd);
    ctx.closePath();
}

// Génère le dé n°4
function quatre() {
    genererCarre();
    ctx.beginPath();
    genererArc(25, 25, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(25, 75, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(75, 25, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(75, 75, 10, angleStart, angleEnd);
    ctx.closePath();
}

// Génère le dé n°5
function cinq() {
    genererCarre();
    ctx.beginPath();
    genererArc(25, 25, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(25, 75, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(50, 50, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(75, 25, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(75, 75, 10, angleStart, angleEnd);
    ctx.closePath();
}

// Génère le dé n°6
function six() {
    genererCarre();
    ctx.beginPath();
    genererArc(25, 25, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(25, 50, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(25, 75, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(75, 25, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(75, 50, 10, angleStart, angleEnd);
    ctx.beginPath();
    genererArc(75, 75, 10, angleStart, angleEnd);
    ctx.closePath();
}

// Efface la forme actuelle du canvas de dé
function resetCanvas() {
    ctx.clearRect(xStart, yStart, width, height);
}