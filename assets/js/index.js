'use strict';

function goTo(elt){
    console.log('elt');
    document.getElementById(elt).scrollIntoView({behavior:"smooth"});
}