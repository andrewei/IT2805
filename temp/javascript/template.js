window.addEventListener("load", function () {
    content.appendChild(innerContent);
    body.appendChild(header);
    body.appendChild(navigation);
    body.appendChild(content);
    body.appendChild(footer);
    document.body.appendChild(body);

    var text;
    var header1, header2, nav1, nav2, nav3, nav4, foot1, foot2;
    var test1, test2, test3;
    var req = new XMLHttpRequest();
    req.open('GET', navi + "template.html", false);
    req.send(null);

    if (req.status !== 200) {
        text = null;
    } else {
        text = req.responseText;
    }

    header1 = text.split("header");
    header2 = header1[2].substring(3, header1[2].indexOf("=") + 2) + navi + header1[2].substring(header1[2].indexOf("=") + 2, header1[2].length - 3);

    nav1 = text.split("div");
    nav2 = nav1[2].substring(nav1[2].indexOf("<"), nav1[2].lastIndexOf(">") + 1);

    foot1 = text.split("footer");
    foot2 = foot1[2].substring(3, foot1[2].length - 3);

    nav3 = nav2.split("href");
    nav4 = nav3[0];
    for (i = 1; i < nav3.length; i++) {
        nav4 += "href";
        nav4 += nav3[i].substring(0, 2) + navi + nav3[i].substring(2);
    }

    document.getElementById("header").innerHTML = header2;
    document.getElementsByClassName("navigation")[0].innerHTML = nav4;
    document.getElementById("footer").innerHTML = foot2;

});

function setTitle(name) {
    document.title = name + " - Smash Trondheim";
}

function setContent(type) {
    innerContent.id = type;
}

function navLoc(size) {
    navi = size;
    linkStyle();
	linkJs();
}

function linkJs(){
	var js = document.createElement("script");
    js.src = navi + "javascript/window.js";
    document.getElementsByTagName("head")[0].appendChild(js);
}

function linkStyle() {
    link = document.createElement("link");
    link.href = navi + "style/main.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
}

var body = document.createElement("div");
var header = document.createElement("header");
header.id = "header";
var navigation = document.createElement("div");
navigation.className = "navigation";
var content = document.createElement("div");
content.className = "content";
var innerContent = document.createElement("div");
var footer = document.createElement("footer");
footer.id = "footer";

var navi;