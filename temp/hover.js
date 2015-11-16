window.addEventListener('load', init);


function init(){
	console.log("hover is running init");
	var navBar = document.getElementsByClassName("nav")[0];  

  	// this handler will be executed only once when the cursor moves over the unordered list
	navBar.addEventListener("mouseover", enter);
	navBar.addEventListener("mouseout", leave);
	
	var innerNavBar = document.getElementsByClassName("innerNav")[0];
	if (innerNavBar !== null){
		innerNav.addEventListener("mouseover", enter);
		innerNav.addEventListener("mouseout", leave);
	}
}

   function enter(){   
    // highlight the mouseenter target
    event.target.style.color = "purple";
  };



   function leave(){   
    // highlight the mouseenter target
    event.target.style.color = "white";
  };

  
  
