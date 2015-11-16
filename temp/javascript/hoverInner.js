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





  
  
