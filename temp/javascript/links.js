var title1 = document.createElement("h1");
var ul = document.createElement("ul");
var names = new Array("facebook","twitch","youtube","challonge","smashboards","smashrankings");

var row, col;

window.addEventListener("load", function () {
	var url1 = new Array();
	var url2 = new Array();
	var url3 = new Array();
    var res1 = new Array();
	var res2 = new Array();
	var res3 = new Array();
    var req
	
	title1.innerHTML = "links";
	
	for(i=0;i<names.length;i++){
		req = new XMLHttpRequest();
    	req.open('GET', 'links/text/'+names[i]+'.txt', false);
	    req.send(null);
	    if (req.status !== 200) {
	        res1.push(null);
	    } else {
	        res1.push(req.responseText);
	    }
		res2.push(res1[i].split(/\r\n|\r|\n/g));
	}
	
	for(i=0;i<names.length;i++){
		req = new XMLHttpRequest();
    	req.open('GET', 'links/links/'+names[i]+'.txt', false);
	    req.send(null);
	    if (req.status !== 200) {
	        url1.push(null);
	    } else {
	        url1.push(req.responseText);
	    }
		url2.push(url1[i].split(/\r\n|\r|\n/g));
	}
	console.log(url2);
	
	for(i=0;i<res2.length;i++){
		res3[i] = new Array();
		if(res2[i].length>1){
			for(var p in res2[i]){
				res3[i].push(res2[i][p].split(":"));
			}
		}else{
			res3[i] = res2[i];
		}
	}
	
	for(i=0;i<names.length;i++){
		var teLi1 = document.createElement("li");
		var headers = document.createElement("p");
		headers.id = "headers";
		headers.innerHTML = names[i];
		
		if(i>1){
			headers = document.createElement("a");
			headers.id = "headersLink";
			headers.innerHTML = names[i];
			headers.href = url2[i];
			headers.target = "_blank";
		}
		
		teLi1.appendChild(headers);
		for(j=0;j<res3[i].length;j++){
			var teLi21 = document.createElement("li");
			var teLi22 = document.createElement("li");
			teLi22.id = "text";
			if(res3[i].length>1){
				var teLi31 = document.createElement("li");
				var li2 = document.createElement("a");
				var teLi32 = document.createElement("li");
				teLi31.id = "bold";
				teLi32.id = "text";
				li2.innerHTML = res3[i][j][0];
				li2.href = url2[i][j];
				li2.target = "_blank";
				teLi31.appendChild(li2);
				teLi32.innerHTML = res3[i][j][1];
				teLi21.appendChild(teLi31);
				teLi21.appendChild(teLi32);
				teLi1.appendChild(teLi21);
			}else{
				teLi22.innerHTML = res3[i][0];
				teLi1.appendChild(teLi22);
			}
		}
		ul.appendChild(teLi1);
	}
	
	document.getElementById("links").appendChild(title1);
	document.getElementById("links").appendChild(ul);
	
});