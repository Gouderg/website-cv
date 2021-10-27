'use strict';



// Fonction qui va gérer l'affichage des balises de choix.
function balise_choix(data) {
    var balise = ["All"];
    
    // On récupère chaque tags présent dans le json 
    for (const key in data) {
        data[key].tag.forEach(element => {
            if (!balise.includes(element)) {
                balise.push(element);
            }
        });
    }
    
    // On affiche les différentes catégories
    var selecteurs = "";
    balise.forEach(tag => {
        selecteurs += '<h5 onclick="choices(\''+tag+'\')" class="tags">'+tag+'</h5>';
    });
    document.getElementById("selec-tag").innerHTML = selecteurs;
}

// Fonction qui va ajouter chaque miniature de projet.
function displaySmallProject(data) {


    // Récupère la vignette de chaque élément
    var img = document.createElement("img");
    img.src = data["12"].path+'img/calcul.png';
    img.classList.add("img-container");
    document.getElementById("click").appendChild(img);
}

// Fonction qui va afficher le grand projet.
function displayOneProject(data) {

}

// Fonction qui gere l'affichage de toute l'interface.
function meastro(data) {
    
    balise_choix(data);

    
}

// Fonction qui récupère toutes données.
function init() {
    
    fetch("../assets/res/json/projects.json")
        .then(response => response.json())
        .then(text => meastro(text))
}


// Fonction qui permet de filter l'affichage des projets en fonction d'un sélecteurs.
function choices(tag) {
    console.log(tag);

    console.log(document.getElementById('selec-tag').childNodes);
}
