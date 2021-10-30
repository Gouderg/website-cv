Number.prototype.mod = function(n) {
	var m = (( this % n) + n) % n;
	return m < 0 ? m + Math.abs(n) : m;
};


function moveleft() {
    var a = document.getElementById('carrousel-block-png').children;
    var id = 0;
    for (var i=0; i < a.length; i++) {
        if (a[i].hidden === false) {
            id = parseInt((a[i].id).split('_')[1]);
        }
    }

    document.getElementById('img_'+id.toString()).hidden = true;
    document.getElementById('img_'+(((id-1).mod(a.length)).toString())).hidden = false;
}

function moveright() {
    var a = document.getElementById('carrousel-block-png').children;
    var id = 0;
    for (var i=0; i < a.length; i++) {
        if (a[i].hidden === false) {
            id = parseInt((a[i].id).split('_')[1]);
        }
    }

    document.getElementById('img_'+id.toString()).hidden = true;
    document.getElementById('img_'+(((id+1).mod(a.length)).toString())).hidden = false;
}