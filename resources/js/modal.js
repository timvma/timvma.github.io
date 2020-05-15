

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



