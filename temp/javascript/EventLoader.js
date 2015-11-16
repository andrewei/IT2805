var nav = document.createElement("div");
nav.id = "innerNav";
var navList = document.createElement("ul");
var nl1 = document.createElement("li");
var nl2 = document.createElement("li");
var newEvents = document.createElement("a");
newEvents.innerHTML = "Nyeste Arrangementer";
newEvents.onclick=function() { if(activePos != 0) show(0); };
var remEvents = document.createElement("a");
remEvents.innerHTML = "Eldre Arrangementer";
remEvents.onclick=function() { if(activePos != 1) show(1); };
nl1.appendChild(newEvents);
nl2.appendChild(remEvents);
navList.appendChild(nl1);
navList.appendChild(nl2);
nav.appendChild(navList);
var activePos = 0;

var eventList = document.createElement("div");
eventList.id="eventList";
var list = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");
var lix = new Array(li1,li2,li3,li4,li5);
var drop = document.createElement("select");
drop.addEventListener('change', function() { selected(drop.selectedIndex+5) });

var events = document.createElement("div");
events.id="tournaments";
var na = document.createElement("h1");
na.id = "evName";
var date = document.createElement("h3");
date.id = "evDate";	
var info = document.createElement("p");
info.id = "evInfo";
var results = document.createElement("h2");
results.id = "evResults";
var tourn = document.createElement("ul");
tourn.id = "evTourn";

var eve = new Array();

var res;
	var req = new XMLHttpRequest();
	req.open('GET', 'events&results/Events.xml', false);
	req.send(null);
	if (req.status !== 200) {
        res = null;
    } else {
        res = req.responseXML;
    }

	var x = res.getElementsByTagName("event");
	
	for(i = 0;i<x.length;i++){
		t=new Array();
		
		t.push(x[i].getElementsByTagName("name")[0].childNodes[0]);
		t.push(x[i].getElementsByTagName("date")[0].childNodes[0]);
		t.push(x[i].getElementsByTagName("info")[0].childNodes[0]);
		t.push(x[i].getElementsByTagName("facebooklink")[0].childNodes[0]);
		
		var games = x[i].getElementsByTagName("game");
		
		for(j = 0;j<games.length;j++){
			var s = new Array();
			s.push(games[j].getElementsByTagName("picture")[0].childNodes[0]);
			s.push(games[j].getElementsByTagName("description")[0].childNodes[0]);
			s.push(games[j].getElementsByTagName("results")[0].childNodes[0]);
			t.push(s);
		}
		eve.push(t);
	}
	eve.sort(dates);


window.addEventListener("load", function () {
	events.appendChild(na);
	events.appendChild(date);
	events.appendChild(info);
	events.appendChild(results);
	events.appendChild(tourn);

	document.getElementById("event").appendChild(nav);
	document.getElementById("event").appendChild(eventList);
	document.getElementById("event").appendChild(events);
	
	show(0);
});

function dates(a, b){
	if(parseInt(a[1].nodeValue.substring(6,10))>parseInt(b[1].nodeValue.substring(6,10))){
		return -1;
	}else if(parseInt(a[1].nodeValue.substring(6,10))<parseInt(b[1].nodeValue.substring(6,10))){
		return 1;
	}
	if(parseInt(a[1].nodeValue.substring(3,5))>parseInt(b[1].nodeValue.substring(3,5))){
		return -1;
	}else if(parseInt(a[1].nodeValue.substring(3,5))<parseInt(b[1].nodeValue.substring(3,5))){
		return 1;
	}
	if(parseInt(a[1].nodeValue.substring(0,2))>parseInt(b[1].nodeValue.substring(0,2))){
		return -1;
	}else if(parseInt(a[1].nodeValue.substring(0,2))<parseInt(b[1].nodeValue.substring(0,2))){
		return 1;
	}
	return 0;
}

function selected(o){
	var res1;
    req = new XMLHttpRequest();
    req.open('GET', 'events&results/info/'+eve[o][2].nodeValue+'.txt', false);
    req.send(null);
    if (req.status !== 200) {
        res1 = null;
    } else {
        res1 = req.responseText;
    }
	
	document.getElementById("evTourn").innerHTML = null;
	
	document.getElementById("evName").innerHTML = eve[o][0].nodeValue;
	document.getElementById("evDate").innerHTML = eve[o][1].nodeValue;
	document.getElementById("evInfo").innerHTML = res1 + "\nLink: "+eve[o][3].nodeValue;
	document.getElementById("evResults").innerHTML = "Brackets/Results";
	for(i=4;i<eve[o].length;i++){
		var teLi = document.createElement("li");
		var teIm = document.createElement("img");
		var teA = document.createElement("a");
		
		teIm.src = "images/"+eve[o][i][0].nodeValue+".png";
		teA.appendChild(teIm);
		teA.innerHTML += eve[o][i][1].nodeValue;
		teA.href = eve[o][i][2].nodeValue;
		teA.target = "_blank";
		teLi.appendChild(teA);
		document.getElementById("evTourn").appendChild(teLi);
	}
}

function show(i){
	activePos = i;
	if(document.getElementById("eventList").hasChildNodes()){
   		document.getElementById("eventList").removeChild(document.getElementById("eventList").lastChild);
	}
	if(i==0){
		document.getElementById("evTourn").innerHTML = "";
		document.getElementById("evName").innerHTML = "";
		document.getElementById("evDate").innerHTML = "";
		document.getElementById("evInfo").innerHTML = "";
		document.getElementById("evResults").innerHTML = "";
		
		drop = document.createElement("select");
		drop.addEventListener('change', function() { selected(drop.selectedIndex+5) });
	for(k=0;k<5;k++){
		var tempDiv = document.createElement("div");
		var tempTitle = document.createElement("h2");
		var tempDate = document.createElement("h3");
		tempTitle.innerHTML = eve[k][0].nodeValue;
		tempDate.innerHTML = eve[k][1].nodeValue;
		tempDiv.appendChild(tempTitle);
		tempDiv.appendChild(tempDate);
		tempDiv.onclick = (function(m) {
    		return function() {
		       selected(m);
		    };
		})(k);
		lix[k].appendChild(tempDiv);
		list.appendChild(lix[k]);
	}
	eventList.appendChild(list);
	} else {
		list = document.createElement("ul");
		li1 = document.createElement("li");
		li2 = document.createElement("li");
		li3 = document.createElement("li");
		li4 = document.createElement("li");
		li5 = document.createElement("li");
		lix = new Array(li1,li2,li3,li4,li5);
		
		for(k=5;k<eve.length;k++){
		var tempDrop = document.createElement("option");
		var tempTitle = document.createElement("h2");
		tempTitle.innerHTML = eve[k][0].nodeValue;
		tempDrop.appendChild(tempTitle);
		tempDrop.onclick = (function(m) {
    		return function() {
		       selected(m);
		    };
		})(k);
		drop.appendChild(tempDrop);
	}
	eventList.appendChild(drop);
	selected(5);
	}
}