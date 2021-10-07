'use strict';

// Highlight the good page.
function  highlight(path, newClass) {
    var ids = path[(window.location.href).split('/')[(window.location.href).split('/').length - 1].replace('.html', '')];
    if (ids === undefined) {
        ids = path['index'];
    }

    document.getElementById(ids).classList.add(newClass);
}


function unrollMenu() {
    var x = document.getElementById("responsive-menu");
    var y = document.getElementById("icon-menu-burger");

    if (x.className === "resp-menu") {
        x.className += " open";
        y.innerHTML = "&#10137;"
        highlight({'index': '11','workexperience': '22','skills': '33','projects': '44','current_setup': '55'}, 'resp-menu-item-highlight');

    } else {
        x.className = "resp-menu";
        y.innerHTML = "&#9776;"
    }
}

highlight({'index': '1','workexperience': '2','skills': '3','projects': '4','current_setup': '5'}, 'menu-text-highlight');