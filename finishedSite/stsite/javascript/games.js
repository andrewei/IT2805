/*
FILE NAME: games.js
WRITTEN BY: Joakim
WHEN: November 2015
PURPOSE: 	This Javascript file creates elements to put in content-container
			This file takes in a string param and uses that to get the correct files to display
			Due to this, this js is used for all subpages of games.html
*/

var game;
var title = document.createElement("h1");
title.id = "title";
var text = document.createElement("p");
text.id = "text";
var img = document.createElement("img");
img.id = "img";
var vid = document.createElement("iframe");
vid.id = "vid";

function setGame(name) {
    game = name;
}

window.addEventListener("load", function () {
    var res1, res2;
    var req
    req = new XMLHttpRequest();
    req.open('GET', 'gameText/'+game+'.txt', false);
    req.send(null);
    if (req.status !== 200) {
        res1 = null;
    } else {
        res1 = req.responseText;
    }
    req = new XMLHttpRequest();
    req.open('GET', 'gameLinks/' + game + '.txt', false);
    req.send(null);
    if (req.status !== 200) {
        res2 = null;
    } else {
        res2 = req.responseText;
    }

    if(game == "wiiu"){
		title.innerHTML = "Smash 4 Wii U";
	}else{
		title.innerHTML = game;
	}
	
    img.src = "../images/" + game + ".png";
    text.innerHTML = res1;
    vid.src = res2 + "?modestbranding=1&;showinfo=0&;autohide=1&;rel=0;";
    vid.frameBorder = 0;
    vid.setAttribute('allowFullScreen', '');

    document.getElementById("games").appendChild(title);
    document.getElementById("games").appendChild(img);
    document.getElementById("games").appendChild(text);
    document.getElementById("games").appendChild(vid);
});