




var sideBarOpen =false;




// NAVMENU MOVE *************************************
var navMove = document.getElementById("nav-move").style;
var prevScrollpos = window.pageYOffset;


window.onscroll = function() {

	
	var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) 
	navMove.transform = 'translateY(100%) rotate(90deg)';
	
  else 
  	navMove.transform = 'translateY(200%) rotate(90deg)';
  
  prevScrollpos = currentScrollPos;

 

}





// NAV OPEN/CLOSE *************************************
var navSide = document.getElementById('mySidenav');
var navMenu = document.getElementById("nav-menu");
function nav() {

	navSide.classList.toggle("sideNavActive");
	navMenu.classList.toggle("active");
	sideBarOpen =true;


	
  }
  

// SIDENAV TOUCH *************************************


 

window.addEventListener('load', function(){
	var body = document.body;
	var startingX;
	var distance;
	var current;


body.addEventListener('touchstart', function(e){
	startingX = e.touches[0].clientX;
});

body.addEventListener('touchmove', function(e){
	distance = e.touches[0].clientX - startingX;
	current = e.touches[0].clientX;
});


body.addEventListener('touchend', function(e){
	if(startingX <=20 )
		if(distance > 50  ){ // open nav
			nav();
		
		}
			

		});

}, false);



