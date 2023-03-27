/* Fonction pour ajouter une classe à un élément */
function addClass(element, classe){
    element.classList.add(classe);
}

/* Fonction pour enlever une classe à un élément */
function removeClass(element, classe){
    element.classList.remove(classe);
}

/* Création d'un carré */
const carre = document.createElement("div");
carre.classList.add("carre");

/* On récupère le conteneur de tout les carré */
const contenu = document.querySelector(".contenu");

for(i = 1; i <= 4; i++){
    let nouvCarre = carre.cloneNode();// création d'un carré
    nouvCarre.innerText = i;// avec un chiffre
    contenu.appendChild(nouvCarre);// on l'ajoute au conteneur
    nouvCarre.addEventListener("click", function(){ // quand on clique ce carré :
        if(nouvCarre.classList.contains("tourne")){ // soit il a déjà tourner
            removeClass(nouvCarre, "tourne");// donc on enlève la classe "tourne"
            addClass(nouvCarre, "base");
        }
        else{ // soit il n'a pas encore tourner
            removeClass(nouvCarre, "base");
            addClass(nouvCarre, "tourne");// donc on le fait tourner
        }
    });
}