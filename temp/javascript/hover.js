window.addEventListener('load', init);


function init(){
	console.log("hover is running init");
	var navBar = document.getElementsByClassName("nav")[0];  
	var content = document.getElementsByClassName("content")[0];  

	navBar.addEventListener("mouseover", enter);
	navBar.addEventListener("mouseout", leave);


}

   function enter(){   
    // highlight the mouseenter target
    event.target.style.color = "purple";
  };

   function leave(){   
    // highlight the mouseenter target
    event.target.style.color = "white";
  };





  
  
