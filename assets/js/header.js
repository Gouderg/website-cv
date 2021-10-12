'use strict';

// Highlight the good page.
function  highlight(path, newClass) {
    var ids = path[(window.location.href).split('/')[(window.location.href).split('/').length - 1].replace('.html', '')];
    if (!(ids === undefined)) {
        document.getElementById(ids).classList.add(newClass);
    }
}


function unrollMenu() {
    var x = document.getElementById("responsive-menu");
    var y = document.getElementById("icon-menu-burger");

    if (x.className === "resp-menu") {
        x.className += " open";
        y.innerHTML = "&#10137;"
        highlight({'workexperience': '11','projects': '22','current_setup': '33'}, 'resp-menu-item-highlight');

    } else {
        x.className = "resp-menu";
        y.innerHTML = "&#9776;"
    }
}

function changeLang(lang) {
    console.log(window.location.href.split('/')[window.location.href.split('/').length-1]);
    var current_page = window.location.href.split('/')[window.location.href.split('/').length - 1];
    var url = '../'+lang+'/'+current_page;
    window.location = url;
}

highlight({'workexperience': '1','projects': '2','current_setup': '3'}, 'menu-text-highlight');