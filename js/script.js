//show menu Bar
const nav=document.querySelector('.nav');
const toggle =document.querySelector('.nav-toggle');

toggle.onclick=()=>{
    nav.classList.toggle('show-menu');
}
//Remove Menu Bar
const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
    const navMenu=document.querySelector('.nav');
    nav.classList.Remove('show_menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction));

//Chanag Active Link
const linkColor=document.querySelectorAll('.nav-link');
function colorLink(){
    if(colorLink){
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }
}
linkColor.forEach(l => l.addEventListener('click',colorLink));

// Swiper Home Section
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
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

  //Change Header Background 

  const header=document.querySelector('.header')
  window.addEventListener('scroll',()=>{
    if(window.scrollY >= 300){
        header.classList.add('header-background')
    }
    else header.classList.remove('header-background')
  });