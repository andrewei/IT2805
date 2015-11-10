var xmlPlacement = "Events.xml";
window.addEventListener('load', init);

function init(){
	//loads xml file with stored information on events
	var xmlDoc = loadXML(xmlPlacement);
	//loads eventTable from html
	var htmlEventTable = document.getElementsByClassName("eventTable")[0];
	//removes static information from webpage
	while (htmlEventTable.firstChild !== null) {
	    htmlEventTable.removeChild(htmlEventTable.firstChild);
	}
	//create eventList from the xml
	var events = createEventList(xmlDoc);
	console.log(events);
	updateHTML(events, htmlEventTable);
	console.log("Printing htmlEventTable");
	console.log(htmlEventTable);
	//update html from events

}


//	not done, commented out because of a git push.
function createEventList(xmlDoc){
	var events = [];
	var x = xmlDoc.documentElement.childNodes;
	for(var i = 0; i < x.length; i++) {
		if(x[i].nodeName == "event"){
			events.push(x[i]);
		}
		//events[i] = x[i];
    }
    return events;
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
	var facebookLink = document.createTextNode(event.getElementsByTagName("facebooklink")[0].innerHTML);
	elementDivFacebookLink.className = 'elementDivFacebookLink';
	elementDivFacebookLink.appendChild(facebookLink);

	var elementDivGames = document.createElement('div');

	for(var i = 0; i < event.getElementsByTagName("game").length; i++){
		var elementDivGame = document.createElement('div');
		var game = event.getElementsByTagName("game")[i];
		elementDivGame.className = 'elementDivGame'; 

		var gameChildPicture = document.createElement('div');
		var picture = document.createTextNode(game.getElementsByTagName("picture")[0].innerHTML);
		gameChildPicture.appendChild(picture);
		gameChildPicture.className = "gameChildPicture";

		var gameChildDescription = document.createElement('div');
		var description = document.createTextNode(game.getElementsByTagName("description")[0].innerHTML);
		gameChildDescription.appendChild(description);
		gameChildDescription.className = "gameChildPicture";
	
		var gameChildResults = document.createElement('div');
		var results = document.createTextNode(game.getElementsByTagName("results")[0].innerHTML);
		gameChildResults.appendChild(results);
		gameChildResults.className = "gameChildResults";

		elementDivGame.appendChild(gameChildPicture);
		elementDivGame.appendChild(gameChildDescription);
		elementDivGame.appendChild(gameChildResults);

		console.log("GAMES :" + game.innerHTML);
		elementDivGames.appendChild(elementDivGame);
	}

	elementDivGames.className = 'elementDivGames';

	//var ElementDivDate = document.createElement('div');
	//var date = document.createTextNode(event.getElementsByTagName("date")[0].innerHTML);

	eventDiv.appendChild(elementDivName);
	eventDiv.appendChild(elementDivDate);
	eventDiv.appendChild(elementDivFacebookLink);
	eventDiv.appendChild(elementDivGames);
	htmlEventTable.appendChild(eventDiv);	
	
	console.log("name child :" + event.getElementsByTagName("name")[0].innerHTML);
	return;
}
