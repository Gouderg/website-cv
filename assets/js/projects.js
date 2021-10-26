'use strict';

function balise_choix(data) {
    var balise = ["All"];
    for (const key in data) {
        data[key].tag.forEach(element => {
            if (!balise.includes(element)) {
                balise.push(element);
            }
        });
    }
    console.log(balise);
}


function meastro() {
    var data = JSON.parse(this.responseText);
    
    balise_choix(data);
    
}

function init() {
    var xhr = new XMLHttpRequest();
    xhr.onload = meastro;
    xhr.open("GET", "../assets/res/json/projects.json", true);
    xhr.send(null);

}



