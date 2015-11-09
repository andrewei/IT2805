
var xmlPlacement = "Events.xml";


window.addEventListener('load', init);



function init(){
	var xmlDoc = loadXML(xmlPlacement);
	console.log(xmlDoc);
}


/*	not done, commented out because of a git push.
function createEventList(xmlDoc){
	var events = [];
	for(var i = 0; i < event.length; i++) {
    }
}
*/



function loadXML(name){
	var req = new XMLHttpRequest();
	req.open('GET', name, false); //async or not, may change to true;
	req.send(null); //
	
	if(req.status !== 200){
		return null
	}
	return req.responseXML;
}