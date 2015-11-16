/*
FILE NAME: hoverInner.js
WRITTEN BY: Andreas
WHEN: November 2015
PURPOSE: 	This Javascript file makes the inner navigation bar have a mouseover Event
*/

window.addEventListener('load', init);


function init(){
    var innerNavBar = document.getElementsByClassName("innerNav")[0];
    innerNav.addEventListener("mouseover", enter);
    innerNav.addEventListener("mouseout", leave);
}

   function enter(){   
    // highlight the mouseenter target
    event.target.style.color = "purple";
  };

   function leave(){   
    // highlight the mouseenter target
    event.target.style.color = "white";
  };





  
  
