//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//Navigation bar mobile version
function openNav() {
   document.getElementById("nav-bar-mobile").style.display= "block";
   document.getElementById("icon").style.display= "none";
   document.getElementById("overlay").style.width= "100%";
   document.getElementById("X").style.display= "block";
}
function closeNav() {
   document.getElementById("nav-bar-mobile").style.display= "none";
   document.getElementById("icon").style.display= "block";
   document.getElementById("overlay").style.width= "0%";
   document.getElementById("X").style.display= "none";
}

/* burger
$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

function burger() {
  document.body.classList.toggle("open");
}
*/
