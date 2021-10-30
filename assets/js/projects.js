'use strict';



// Fonction qui va gérer l'affichage des balises de choix.
function balise_choix(data) {
    var balise = ["All"];
    var palette = ["#66ff66", "#ffff00", "#cc66ff", "#A0DAA9", "#56C6A9"];
    var color = {};
    var id = 0;
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
        if (tag !== "All") {
            color[tag] = palette[id];
            id += 1;
        }
        selecteurs += '<h5 onclick="choices(\''+tag+'\')" class="tags">'+tag+'</h5>';
    });
    document.getElementById("selec-tag").innerHTML = selecteurs;
    return color;
}

// Fonction qui va ajouter chaque miniature de projet.
function displaySmallProject(data, color) {

    // On recupre la langue du navigateur.
    var lang = (document.documentElement.lang === 'en') ? 1 : 0;
    var terminaison = ["_fr", "_en"];
    var div = "";

    for (const key in data) {
        fetch(data[key].path+'text/description'+terminaison[lang]+'.txt')
            .then(response => response.text())
            .then(text => {

                var id_tag = "";
                data[key].tag.forEach(tag => {
                    id_tag += tag+' ';
                });

                div = '<div class="flip-card" id="'+id_tag+'" onclick="displayOneProject('+key+')">'+
                        '<div class="flip-card-inner">'+

                            '<div class="front">'+
                                '<img src="'+data[key].path+'img/miniature.png'+'" alt="miniature" class="front-left">'+
                                '<div class="front-right">'+
                                    '<h3 class="front-title">'+data[key].name+'</h3>'+
                                    '<div class="front-box-inline">'+
                                        '<h6 class="inline-date">Date: '+data[key].years[lang]+'</h6>'+
                                        '<h6 class="inline-techno">Technologies: '+data[key].tech+'</h6>'+
                                    '</div>'+

                                    '<div class="front-list-tags">';
                
                data[key].tag.forEach(tag => {
                    div += '<h6 class="front-tags" style="color:'+color[tag]+'">'+tag+'</h6>';
                });
                
                div +=              '</div>'+
                                '</div>'+
                            '</div>'+

                            '<div class="back">'+
                                '<h3 class="back-title">'+data[key].name+'</h3>'+
                                '<p class="back-description">'+text+'</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
                document.getElementById("list-project").innerHTML += div;
            });
    }

}

// Fonction qui récupère toutes données.
function init() {
    
    fetch("../assets/res/json/projects.json")
        .then(response => response.json())
        .then(data => {
            var color = balise_choix(data);
            displaySmallProject(data, color);
        })
}


// Fonction qui permet de filter l'affichage des projets en fonction d'un sélecteurs.
function choices(tag) {
    if (tag === "All") {
        document.getElementById('list-project').childNodes.forEach(elt => {
            elt.hidden = false;
        });
    } else {
        document.getElementById('list-project').childNodes.forEach(elt => {
            console.log(elt);
            if (elt.id.includes(tag)) {
                elt.hidden = false;
            } else {
                elt.hidden = true;
            }
        });
    }
}

function backToTop() {

    document.getElementById('big-project').style.display = 'none';
    window.scrollTo({
        top: -1,
        behavior: 'smooth'
    });
}

// Fonction qui va afficher le grand projet.
function displayOneProject(id) {
    document.getElementById('big-project').style.display = 'flex';
    document.getElementById('big-project').scrollIntoView({behavior:"smooth"});

    // On recupre la langue du navigateur.
    var lang = (document.documentElement.lang === 'en') ? 1 : 0;
    var terminaison = ["_fr", "_en"];

    fetch("../assets/res/json/projects.json")
        .then(response => response.json())
        .then(data => {
            // On injecte le titre.
            document.getElementById("title-project").innerHTML = data[id].name;

            // On injecte le carrousel.
            var div = '<img id="img_0" class="carrousel-png" src="'+data[id].path+'img/miniature.png" alt="miniature"></img>';
            for (var i = 0; i < data[id].nb_photo; i++) {
                div += '<img id="img_'+(i+1)+'" class="carrousel-png" src="'+data[id].path+'img/'+i+'.png" alt="miniature" hidden></img>';
            }
            document.getElementById('carrousel-block-png').innerHTML = div;

            // On injecte le nombre de personne.
            document.getElementById("pers").innerHTML = data[id].participant;

            // On injecte la date.
            document.getElementById("years").innerHTML = data[id].years[lang];

            // On injecte le context.
            document.getElementById("type").innerHTML = data[id].context[lang];

            // On injecte les technologies
            document.getElementById("tech").innerHTML = data[id].tech;

            // Récupération description.
            fetch(data[id].path+'text/description'+terminaison[lang]+'.txt')
                .then(response => response.text())
                .then(desc => {document.getElementById('desc-pro-text').innerHTML = desc; });
            
            // Récupération how_work.
            fetch(data[id].path+'text/how_work'+terminaison[lang]+'.txt')
                .then(response => response.text())
                .then(desc => {document.getElementById('work-pro-text').innerHTML = desc; });
            
            // Récupération how_use.
            fetch(data[id].path+'text/how_use'+terminaison[lang]+'.txt')
                .then(response => response.text())
                .then(desc => {document.getElementById('use-pro-text').innerHTML = desc; });

        });


}
