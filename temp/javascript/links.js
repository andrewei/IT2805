var title1 = document.createElement("h1");
var ul = document.createElement("ul");
var lists = new Array();
var names = new Array("facebook","twitch","youtube","challonge","smashboards","smashrankings");

var row, col;

window.addEventListener("load", function () {
    var res1 = new Array();
	var res2 = new Array();
	var res3 = new Array();
    var req
	
	var test1, test2, test3, test4, test5;
	
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
	
	console.log(res2);
	
	for(i=0;i<res2.length;i++){
		res3[i] = new Array();
		console.log(res2[i]);
		if(res2[i].length>1){
			for(var p in res2[i]){
				res3[i].push(res2[i][p].split(":"));
			}
		}else{
			res3[i] = res2[i];
		}
	}
	console.log(res3);
	
	for(i=0;i<names.length;i++){
		var teLi1 = document.createElement("li");
		teLi1.innerHTML = names[i];
		for(j=0;j<res3[i];j++){
			var teLi2 = document.createElement("li");
			teLi2.innerHTML
			for(k=0;k<names.length;k++){
				for(l=0;l<names.length;l++){
					
				}
			}
		}
		ul.appendChild(teLi1);
	}
	
});