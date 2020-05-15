




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




