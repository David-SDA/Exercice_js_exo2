function addClass(element, classe){
    element.classList.add(classe);
}

function removeClass(element, classe){
    element.classList.remove(classe);
}

function clique(){
    addClass(carre, "tourne");
}

const carre = document.createElement("div");
carre.classList.add("carre");

let contenu = document.querySelector(".contenu");

for(i = 1; i <= 4; i++){
    let nouvCarre = carre.cloneNode();
    nouvCarre.innerText = i;
    contenu.appendChild(nouvCarre);
    nouvCarre.addEventListener("click", clique());
}