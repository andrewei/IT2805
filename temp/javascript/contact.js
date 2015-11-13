var title = document.createElement("h1");
var text1 = document.createElement("p");
var table = document.createElement("table");
var text2 = document.createElement("p");
var row,col;

window.addEventListener("load", function () {
    var res1, res2;
    var req
    req = new XMLHttpRequest();
    req.open('GET', 'contact/text.txt', false);
    req.send(null);
    if (req.status !== 200) {
        res1 = null;
    } else {
        res1 = req.responseText;
    }
    req = new XMLHttpRequest();
    req.open('GET', 'contact/contacts.xml', false);
    req.send(null);
    if (req.status !== 200) {
        res2 = null;
    } else {
        res2 = req.responseXML;
    }

    console.log(res2);
    
    var x = res2.getElementsByTagName("contact");

    row = document.createElement("tr");
    for (i = 0; i < x.length; i++) {
        col=document.createElement("td");
        col.appendChild(x[i].getElementsByTagName("name")[0].childNodes[0]);
        row.appendChild(col);
    }
    table.appendChild(row);
    row = document.createElement("tr");
    for (i = 0; i < x.length; i++) {
        col = document.createElement("td");
        col.appendChild(x[i].getElementsByTagName("title")[0].childNodes[0]);
        row.appendChild(col);
    }
    table.appendChild(row);
    row = document.createElement("tr");
    for (i = 0; i < x.length; i++) {
        col = document.createElement("td");
        col.appendChild(x[i].getElementsByTagName("mail")[0].childNodes[0]);
        row.appendChild(col);
    }
    table.appendChild(row);

    title.innerHTML = "contact";
    text1.innerHTML = "Det nåværende styret er:";
    text2.innerHTML = res1;

    document.getElementById("contact").appendChild(title);
    document.getElementById("contact").appendChild(text1);
    document.getElementById("contact").appendChild(table);
    document.getElementById("contact").appendChild(text2);
});
