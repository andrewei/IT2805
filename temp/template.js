window.addEventListener("load", function () {
    var text;
    var header1, header2, nav1, nav2, foot1, foot2;
    var req = new XMLHttpRequest();
    req.open('GET', 'template.html', false);
    req.send(null);

    if (req.status !== 200) {
        text = null;
    } else {
        text = req.responseText;
    }

    header1 = text.split("header");
    header2 = header1[2].substring(3, header1[2].length - 3);

    nav1 = text.split("div");
    nav2 = nav1[2].substring(nav1[2].indexOf("<"), nav1[2].lastIndexOf(">") + 1);

    foot1 = text.split("footer");
    foot2 = foot1[2].substring(3, foot1[2].length - 3);;

    document.getElementById("header").innerHTML = header2;
    document.getElementsByClassName("navigation")[0].innerHTML = nav2;
    document.getElementById("footer").innerHTML = foot2;

});

function changeTitle(name) {
    document.title = name + " - Smash Trondheim";
    console.log(document.title);
}

link = document.createElement("link");
link.href = "main.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);