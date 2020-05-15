




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






var myModal = document.querySelector(".modal");
var bodyScroll = document.getElementById('bodyScroll');
var bodyWrap = document.getElementById('bodyWrap');

function modal(modalID){
    document.getElementById(modalID).classList.toggle("modalActive");
   
   bodyScroll.classList.toggle("scrolling"); 
  // bodyWrap.classList.toggle("wrapModal"); 
   navMenu.classList.toggle("active");

}  




function modals(ID){
	myModal = document.getElementById(ID);
	toggleModal();
	bodyScroll.classList.toggle("scrolling"); 
   //bodyWrap.classList.toggle("wrapModal"); 
}

function toggleModal() {
	myModal.classList.add("modal--animatable");	
	bodyWrap.classList.add("body--animatable");	
	if(!myModal.classList.contains("modal--visible")) {		
		myModal.classList.add("modal--visible");
		bodyWrap.classList.add("body--visible");
	} else {
		myModal.classList.remove('modal--visible');		
		bodyWrap.classList.remove('body--visible');		
	}	
}

function OnTransitionEnd() {
	myModal.classList.remove("modal--animatable");
}

myModal.addEventListener("transitionend", OnTransitionEnd, false);









// REVEALER *************************************

var revealerpoint = window.innerHeight/4;


window.addEventListener('scroll', reveal);
reveal();

function reveal() {
    var revealers = document.querySelectorAll('.revealer');
    for (var i = 0; i < revealers.length; i++) {
        var windowheight = window.innerHeight;
        var revealertop = revealers[i].getBoundingClientRect().top;
        
        if (revealertop < windowheight - revealerpoint) {
            //revealers[i].classList.add('active');
            revealers[i].style.opacity='1';
        } 
    } 
};





// ACORDION *************************************

var accordion = document.getElementsByClassName("accordion");
var acci;

for (acci = 0; acci < accordion.length; acci++) {
  accordion[acci].addEventListener("click", function() {
	this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.opacity = 0;

    } else {
		panel.style.maxHeight = panel.scrollHeight + "px";
		panel.style.opacity = 1;
		panel.style.width = '100%';
		
    } 
  });
}




