/*
FILE NAME: hover.js
WRITTEN BY: Andreas
WHEN: November 2015
PURPOSE: 	This Javascript file creates mouseover Events on the elements of the navigation bar
*/

window.addEventListener('load', init);


function init(){
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





  
  
