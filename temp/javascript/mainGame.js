var title = document.createElement("h1");
title.id = "title";
var navBar = document.createElement("nav");
navBar.className = "navBar";
var ul = document.createElement("ul");
var li1 = document.createElement("li");
var a1 = document.createElement("a");
var img1 = document.createElement("img");
var li2 = document.createElement("li");
var a2 = document.createElement("a");
var img2 = document.createElement("img");
var li3 = document.createElement("li");
var a3 = document.createElement("a");
var img3 = document.createElement("img");
var li4 = document.createElement("li");
var a4 = document.createElement("a");
var img4 = document.createElement("img");
var text = document.createElement("p");
text.id = "text";

title.innerHTML = "games";
img1.src = "images/melee.png";
a1.appendChild(img1);
a1.href = "games/melee.html";
//a1.innerHTML += "Melee";
li1.appendChild(a1);
img2.src = "images/brawl.png";
a2.appendChild(img2);
a2.href="games/brawl.html";
//a2.innerHTML += "Brawl";
li2.appendChild(a2);
img3.src = "images/pm.png";
a3.appendChild(img3);
a3.href = "games/pm.html";
//a3.innerHTML += "Project M";
li3.appendChild(a3);
img4.src = "images/wiiu.png";
a4.appendChild(img4);
a4.href = "games/wiiu.html";
//a4.innerHTML += "Wii U";
li4.appendChild(a4);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

window.addEventListener("load", function () {
    var res;
    var req = new XMLHttpRequest();
    req.open('GET', 'games/gameText/main.txt', false);
    req.send(null);
    if (req.status !== 200) {
        res = null;
    } else {
        res = req.responseText;
    }

    text.innerHTML = res;

    document.getElementById("games").appendChild(title);
    document.getElementById("games").appendChild(text);
    document.getElementById("games").appendChild(ul);

});