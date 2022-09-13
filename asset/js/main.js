var prevScrollPos = window.pageYOffset;
var header = document.querySelector('.header');
var heightHeader = header.offsetHeight;
window.onscroll = function() {   
var currentScrollPos = window.pageYOffset;
// Srcoll up
if (prevScrollPos > currentScrollPos ) 
{     
   if (currentScrollPos <= heightHeader)
   {
    header.classList.remove("scrollUp");
    header.classList.add("scrollDown");
   }
   else {
    header.classList.add("scrollUp");
    header.classList.remove("scrollDown");
   }
} 
// Scroll down
else {
    header.classList.remove("scrollUp");
    header.classList.add("scrollDown");
}
prevScrollPos = currentScrollPos;
}

/* Actice pagition when click */
var pagitionNumbers = document.querySelectorAll('.pagination')
pagitionNumbers.forEach(function(number) {
number.onclick = function() {
document.querySelector('.pagination.active').classList.remove('active')
this.classList.add('active')
}
})