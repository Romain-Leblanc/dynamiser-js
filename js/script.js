let canvasTourJoueurUn = $("#canvas-tour-joueur-1");
let canvasTourJoueurDeux = $("#canvas-tour-joueur-2");
let scoreTotalJoueurUn = $("#score-total-joueur-1");
let scoreTotalJoueurDeux = $("#score-total-joueur-2");
let scoreActuelJoueurUn = $("#score-actuel-joueur-1");
let scoreActuelJoueurDeux = $("#score-actuel-joueur-2");
let divBoutonLancer = $("#bouton-lancer");
let divBoutonRetenir = $("#bouton-retenir");
let nbChoixPossible = 6;
let numeroJoueurActuel = 1;
let nombrePointsGagnants = 100;
let scoreActuelJoueurEncours, scoreTotalJoueurEncours;

// Initialise (ou réinitialise) la grille de jeu
function init() {

    scoreTotalJoueurUn.text(0);
    scoreTotalJoueurDeux.text(0);

    resetCanvas();

    scoreActuelJoueurUn.text(0);
    scoreActuelJoueurDeux.text(0);

    pointRouge(1);
    pointRouge(2);

    if(!$(`#canvas-tour-joueur-${numeroJoueurActuel}`).hasClass('cacher')) {
        $(`#canvas-tour-joueur-${numeroJoueurActuel}`).addClass('cacher');
    }

    numeroJoueurActuel = 1;
}

// Définit une nouvelle partie du jeu
function nouvellePartie() {
    init();
    $(".griser").removeClass("griser");

    canvasTourJoueurUn.removeClass("cacher");

    divBoutonLancer.attr('onclick', 'lancer()');
}

// Lance le dé
function lancer() {
    resetCanvas();

    scoreActuelJoueurEncours = $(`#score-actuel-joueur-${numeroJoueurActuel}`);

    if(trimValue(scoreActuelJoueurEncours.text()) == 0) {
        divBoutonRetenir.attr('onclick', 'retenir()');
    }

    let nbChoisi = random(nbChoixPossible);

    callCanvasFunction(nbChoisi);

    // Si le numéro choisi est égale à 1
    if(nbChoisi == 1) {

        scoreActuelJoueurEncours.text(0);

        alert("Vous avez tiré le dé numéro 1 !\nVotre score actuel est effacé et c'est au joueur suivant de jouer.");

        // nextPlayer();
    }
    else { // Sinon on actualise le score "ROUND" du joueur actuel
        scoreActuelJoueurEncours.text(parseInt(trimValue(scoreActuelJoueurEncours.text()))+parseInt(+nbChoisi));
    }
}

// Génère un canvas (pour le dé) suivant la valeur du paramètre
function callCanvasFunction(number) {
    // Convertit la valeur passée en paramètre en valeur entière
    number = parseInt(number);
    
    switch (number) {
        case 1:
            un();
            break;
        case 2:
            deux();
            break;
        case 3:
            trois();
            break;
        case 4:
            quatre();
            break;
        case 5:
            cinq();
            break;
        case 6:
            six();
            break;    
        default:
            break;
    }
}