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
    console.log('essai appel lancé');
}
