var title = document.createElement("h1");
var img = document.createElement("img");
var text = document.createElement("p");

window.addEventListener("load", function () {
    var res;
    var req = new XMLHttpRequest();
    req.open('GET', 'text/home.txt', false);
    req.send(null);
    if (req.status !== 200) {
        res = null;
    } else {
        res = req.responseText;
    }

    title.innerHTML = "Smash Trondheim";
    img.src = "images/smash white.png";
    text.innerHTML = res;

    document.getElementById("home").appendChild(title);
    document.getElementById("home").appendChild(img);
    document.getElementById("home").appendChild(text);
});