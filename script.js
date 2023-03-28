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
            nouvCarre.classList.toggle("tourne");// donc on enlève la classe "tourne"
            nouvCarre.classList.toggle("base");
        }
        else{ // soit il n'a pas encore tourner
            nouvCarre.classList.toggle("base");
            nouvCarre.classList.toggle("tourne");
        }
    });
}