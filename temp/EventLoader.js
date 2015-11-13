var xmlPlacement = "Events.xml";
window.addEventListener('load', init);
var maxEventsToShow = 5;
var newEvents = true;
var today;
var htmlEventTable;

function init(){
	htmlEventTable = document.getElementById("eventLoader");
	while (htmlEventTable.firstChild !== null) {
	    htmlEventTable.removeChild(htmlEventTable.firstChild);
	}
	//create form with buttons
	createForm(htmlEventTable);
	//loads xml file with stored information on events
	var xmlDoc = loadXML(xmlPlacement);
	
	//create eventList from the xml
	var events = createEventList(xmlDoc);
	console.log(events);
	updateHTML(events, htmlEventTable);
	console.log("Printing htmlEventTable");
	console.log(htmlEventTable);
	//update html from events
}


function createForm(htmlEventTable){
	var formDiv = document.createElement('div');
	formDiv.id = 'form';


	var buttonNew = document.createElement('BUTTON');
	buttonNew.setAttribute("onclick","setNewEventsAndUpdate(true);");
	var t = document.createTextNode("Show new events");       // Create a text node
	buttonNew.appendChild(t);

	var buttonRecent = document.createElement('BUTTON');
	buttonRecent.setAttribute("onclick","setNewEventsAndUpdate(false);");
	t = document.createTextNode("Show recent events");
	buttonRecent.appendChild(t); 
	formDiv.appendChild(buttonRecent);
	formDiv.appendChild(buttonNew);
	htmlEventTable.appendChild(formDiv);
}

function getCurrentDate(){

	var q = new Date();
	var m = q.getMonth();
	var d = q.getDate();
	var y = q.getFullYear();

	today = new Date(y,m,d);
	return today;
}

function compaireDate(today, eventDate){
	if(today>eventDate){
	    return false;
	}
	else{
	    return true;
	}
	//console.log("dateOfEvent:" + eventDate + " date now : "  + today);
}

//	not done, commented out because of a git push.
function createEventList(xmlDoc){
	console.log("printing current day" + getCurrentDate());
	var events = [];
	var x = xmlDoc.documentElement.childNodes;
	console.log("x structure");
	console.log(x);

	//loop other way if new events, to sort right.
	if(newEvents == false){
		for(var i = 0; i < x.length; i++) {
			if(x[i].nodeName == "event"){
				
				//creates a Date object from the event to see if it should be included.
				dateEvent = new Date(x[i].getElementsByTagName("date")[0].innerHTML);
				var isthisaNewEvent = compaireDate(today, dateEvent);
				console.log("show new events :" + newEvents + " is this a new event? :" + isthisaNewEvent);
				if(newEvents == true && isthisaNewEvent == true){
					if(events.length < maxEventsToShow){
						events.push(x[i]);
					}	
				}
				else if (newEvents == false && isthisaNewEvent == false){ 
					if(events.length < maxEventsToShow){
						events.push(x[i]);
					}
				}
				else {
					continue;
				}
			}
	    }
	}
	else {
		for(var i = x.length-1; i >= 0 ; i--) {
			if(x[i].nodeName == "event"){
				
				//creates a Date object from the event to see if it should be included.
				dateEvent = new Date(x[i].getElementsByTagName("date")[0].innerHTML);
				var isthisaNewEvent = compaireDate(today, dateEvent);
				console.log("show new events :" + newEvents + " is this a new event? :" + isthisaNewEvent);
				if(newEvents == true && isthisaNewEvent == true){
					if(events.length < maxEventsToShow){
						events.push(x[i]);
					}	
				}
				else if (newEvents == false && isthisaNewEvent == false){ 
					if(events.length < maxEventsToShow){
						events.push(x[i]);
					}
				}
				else {
					continue;
				}
			}
	    }
	}
    return events;
}

//should new or old events be shown.
function setNewEvents(boolValue){
	newEvents = boolValue;
}

function setNewEventsAndUpdate(boolValue){
	setNewEvents(boolValue);
	init();
}



function loadXML(name){
	var req = new XMLHttpRequest();
	req.open('GET', name, false); //async or not, may change to true;
	req.send(null); //
	
	if(req.status !== 200){
		return null
	}
	return req.responseXML;
}

function updateHTML(events, htmlEventTable){

	for(var i = 0; i < events.length; i++){
//		console.log("Printing events");
//		console.log(events[i]);
		createNode(events[i], htmlEventTable);
	}
	return;
}


function createNode(event, htmlEventTable){
	var eventDiv = document.createElement('div');
	eventDiv.className = 'eventDiv';

	var elementDivName = document.createElement('div');
	var name = document.createTextNode(event.getElementsByTagName("name")[0].innerHTML);	
	elementDivName.className = 'elementDivName';
	elementDivName.appendChild(name);

	var elementDivDate = document.createElement('div');
	var date = document.createTextNode(event.getElementsByTagName("date")[0].innerHTML);
	elementDivDate.className = 'elementDivDate';
	elementDivDate.appendChild(date);

	var elementDivFacebookLink = document.createElement('div');
	var facebookLink = document.createElement('a');
	facebookLink.innerHTML = "FacebookLink";
	facebookLink.href = event.getElementsByTagName("facebooklink")[0].innerHTML;
	elementDivFacebookLink.className = 'elementDivFacebookLink';
	elementDivFacebookLink.appendChild(facebookLink);

	var elementDivGames = document.createElement('div');

	for(var i = 0; i < event.getElementsByTagName("game").length; i++){
		var elementDivGame = document.createElement('div');
		var game = event.getElementsByTagName("game")[i];
		elementDivGame.className = 'elementDivGame'; 

		var gameChildPicture = document.createElement('div');
		var picture = document.createElement('img');
		picture.setAttribute("src", game.getElementsByTagName("picture")[0].innerHTML);
		picture.setAttribute("height", "100");
		picture.setAttribute("width", "120");
		picture.setAttribute("alt", "Game");


		gameChildPicture.appendChild(picture);
		gameChildPicture.className = "gameChildPicture";

		var gameChildDescription = document.createElement('div');
		var description = document.createTextNode(game.getElementsByTagName("description")[0].innerHTML);
		gameChildDescription.appendChild(description);
		gameChildDescription.className = "gameChildPicture";
	
		var gameChildResults = document.createElement('div');
		var results = document.createElement('a');
		results.href = game.getElementsByTagName("results")[0].innerHTML;
		results.innerHTML = "Game results";
		gameChildResults.appendChild(results);
		gameChildResults.className = "gameChildResults";

		elementDivGame.appendChild(gameChildPicture);
		elementDivGame.appendChild(gameChildDescription);
		elementDivGame.appendChild(gameChildResults);

		console.log("GAMES :" + game.innerHTML);
		elementDivGames.appendChild(elementDivGame);
	}

	elementDivGames.className = 'elementDivGames';
	eventDiv.appendChild(elementDivName);
	eventDiv.appendChild(elementDivDate);
	eventDiv.appendChild(elementDivFacebookLink);
	eventDiv.appendChild(elementDivGames);
	htmlEventTable.appendChild(eventDiv);	
	
	console.log("name child :" + event.getElementsByTagName("name")[0].innerHTML);
	return;
}
