let canvasTourJoueurUn = $("#canvas-tour-joueur-1"); // Élement du DOM <canvas> avec l'ID "canvas-tour-joueur-1"
let canvasTourJoueurDeux = $("#canvas-tour-joueur-2"); // Élement du DOM <canvas> avec l'ID "canvas-tour-joueur-2"
let scoreTotalJoueurUn = $("#score-total-joueur-1"); // Élement du DOM avec le score "GLOBAL" du joueur n°1
let scoreTotalJoueurDeux = $("#score-total-joueur-2"); // Élement du DOM avec le score "GLOBAL" du joueur n°2
let scoreActuelJoueurUn = $("#score-actuel-joueur-1"); // Élement du DOM avec le score "ROUND" du joueur n°1
let scoreActuelJoueurDeux = $("#score-actuel-joueur-2"); // Élement du DOM avec le score "ROUND" du joueur n°2
let divBoutonLancer = $("#bouton-lancer"); // Élement du DOM <div> avec l'ID "bouton-lancer"
let divBoutonRetenir = $("#bouton-retenir"); // Élement du DOM <div> avec l'ID "bouton-retenir"
let nbChoixPossible = 6; // Valeur maximale pour la génération aléatoire du dé
let numeroJoueurActuel = 1; // Numéro du joueur actuel par défaut
let nombrePointsGagnants = 100; // Nombre de points nécessaire afin de remporter la partie
let scoreActuelJoueurEncours, scoreTotalJoueurEncours; // Leurs valeurs seront définies plus tard

// Initialise (ou réinitialise) la grille de jeu
function init() {
    // Réinitialise le <canvas> par défaut
    resetCanvas();
    // Définit le score "GLOBAL" des joueurs à zéro
    scoreTotalJoueurUn.text(0);
    scoreTotalJoueurDeux.text(0);
    // Définit le score "ROUND" des joueurs à zéro
    scoreActuelJoueurUn.text(0);
    scoreActuelJoueurDeux.text(0);
    // Initialise les points rouges des joueurs (leur affichage est géré plus tard)
    pointRouge(1);
    pointRouge(2);
    // Réinitialise l'affichage du point rouge du joueur actuel
    if(!$(`#canvas-tour-joueur-${numeroJoueurActuel}`).hasClass('invisible')) {
        $(`#canvas-tour-joueur-${numeroJoueurActuel}`).addClass('invisible');
    }
    // Définit le joueur qui commence
    numeroJoueurActuel = 1;
}

// Définit une nouvelle partie du jeu
function nouvellePartie() {
    init();
    // Supprime la classe qui grise l'affichage de tous les éléments du DOM
    $(".griser").removeClass("griser");
    // Récupère et affiche le tour du joueur qui commence
    canvasTourJoueurUn.removeClass("invisible");
    // Ajoute l'évènement onclick sur le bouton lancer
    divBoutonLancer.attr('onclick', 'lancer()');
}

// Lance le dé
function lancer() {
    // Réinitialise le contenu du canvas puisqu'il est mis à jour à chaque lancé
    resetCanvas();
    // Récupère l'élément DOM du joueur actuel
    scoreActuelJoueurEncours = $(`#score-actuel-joueur-${numeroJoueurActuel}`);

    // Ajoute l'évènement onclick sur le bouton Retenir au moment du lancé (évite l'enregistrement de la valeur du dé à zéro)
    if(trimValue(scoreActuelJoueurEncours.text()) == 0) {
        divBoutonRetenir.attr('onclick', 'retenir()');
    }

    // Sélectionne un nombre aléatoirement pour le dé et affiche la valeur du dé
    let nbChoisi = random(nbChoixPossible);
    // Génére le canvas grâce à l'appel de sa fonction provenant du résultat retourné par la fonction
    callCanvasFunction(nbChoisi);

    // Si le numéro choisi est égale à 1
    if(nbChoisi == 1) {
        // Efface le score "ROUND" du joueur actuel
        scoreActuelJoueurEncours.text(0);
        // On affiche un message que son score "ROUND" est effacé et que le jeu passe au tour suivant
        alert("Vous avez tiré le dé numéro 1 !\nVotre score actuel est effacé et c'est au joueur suivant de jouer.");
        // Passe au tour suivant
        nextPlayer();
    }
    else { // Sinon on actualise le score "ROUND" du joueur actuel
        scoreActuelJoueurEncours.text(parseInt(trimValue(scoreActuelJoueurEncours.text()))+parseInt(+nbChoisi));
    }
}

// Ajoute la valeur du dé au "GLOBAL" et si le joueur actuel a remporté la partie, affiche un message puis réinitialise l'interface
function retenir() {
    // Récupère l'élément du DOM du joueur en cours de jeu puis met à jour son score
    scoreTotalJoueurEncours = $(`#score-total-joueur-${numeroJoueurActuel}`);    
    // Met à jour son score "GLOBAL"
    scoreTotalJoueurEncours.text(parseInt(scoreTotalJoueurEncours.text())+parseInt(trimValue(scoreActuelJoueurEncours.text())));
    // Si ce score est supérieur ou égale à 100, on exécute le code suivant
    if(parseInt(scoreTotalJoueurEncours.text()) >= nombrePointsGagnants) {
        // On affiche un message de victoire avec son nombre de points "GLOBAL"
        alert(`Le joueur ${numeroJoueurActuel} a gagné la partie avec ${parseInt(scoreTotalJoueurEncours.text())} points !`);
        // Recharge la page afin de réinitialiser la grille et le jeu
        document.location.reload();
    }
    else { // Sinon on passe au tour suivant
        nextPlayer();
    }
}

// Le tour actuel passe au joueur suivant
function nextPlayer() {
    // Si le joueur actuel est le joueur n° 1
    if(numeroJoueurActuel == 1) {
        // On cache l'image du point rouge du joueur n°1 étant donné qu'il vient de jouer puis l'affiche au joueur n°2
        canvasTourJoueurUn.addClass("invisible");
        canvasTourJoueurDeux.removeClass("invisible");
        // On réinitialise le score "ROUND" du joueur n°1 à zéro.
        scoreActuelJoueurEncours.text(0);
        // Définit le tour actuel au joueur suivant
        numeroJoueurActuel = 2;
    }
    else {
        // On cache l'image du point rouge du joueur n°2 étant donné qu'il vient de jouer puis l'affiche au joueur n°1
        canvasTourJoueurUn.removeClass("invisible");
        canvasTourJoueurDeux.addClass("invisible");
        // On réinitialise le score "ROUND" du joueur n°2 à zéro.
        scoreActuelJoueurEncours.text(0);
        // Définit le tour actuel au joueur suivant
        numeroJoueurActuel = 1;
    }
    // Réinitialise le contenu du canvas puisque c'est au tour du joueur suivant
    resetCanvas();
}

// Retourne le numéro choisi aléatoirement entre 1 et la valeur maximale indiquée en paramètre
function random(number) {
    return Math.floor((Math.random() * number) + 1);
}

// Supprime les espaces blancs uniquement si le paramètre est une chaine
function trimValue(str) {
    let newStr;
    if(typeof str === "string"){
        newStr = $.trim(str);
    }
    return newStr;
}

// Génère un canvas (pour le dé) suivant la valeur du paramètre
function callCanvasFunction(number) {
    // Convertit la valeur passée en paramètre en valeur entière
    number = parseInt(number);
    // Boucle pour générer le canvas
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