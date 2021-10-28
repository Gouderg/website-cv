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

    // On recupre la langue du navigateur.
    var index = (navigator.language === 'en') ? 1 : 0;
    var terminaison = ["_fr", "_en"];    

    var projects = "";
    for (const key in data) {
        var div = '<div class="small-box">';
        
        // AJout titre
        div += '<h3 class="small-box-title">'+data[key].name+'</h3>'
        // Ajout Miniature
        div += '<img class="small-box-img" src="'+data[key].path+'img/miniature.png'+'" alt="miniature">';
        // Ajout date
        div += '<div class="small-box-bottom"><h6 class="small-box-date">'+data[key].years[index]+'</h6>';
        // Ajout Technologies
        div += '<h6 class="small-box-techno">'+data[key].tech+'</h6></div></div>';

        projects += div;
    }

    document.getElementById("list-project").innerHTML = projects;
}

// Fonction qui va afficher le grand projet.
function displayOneProject(data) {

}

// Fonction qui gere l'affichage de toute l'interface.
function meastro(data) {
    
    balise_choix(data);
    displaySmallProject(data);
    
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
