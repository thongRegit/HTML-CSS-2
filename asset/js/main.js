/* Animation for header when scroll */
var prevScrollPos = window.pageYOffset;
var header = document.querySelector('.header');
var heightHeader = header.offsetHeight;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) { // Srcoll up    
        if (currentScrollPos <= heightHeader) {
            header.classList.remove("scroll-up");
            header.classList.add("scroll-down");
        }
        else {
            header.classList.add("scroll-up");
            header.classList.remove("scroll-down");
        }
    } else { // Scroll down
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
    }
    prevScrollPos = currentScrollPos;

}

/* Actice pagition when click */
var pagitionNumbers = document.querySelectorAll('.pagination-number');

pagitionNumbers.forEach(function (number) {
    number.onclick = function () {
        document.querySelector('.pagination-number.active').classList.remove('active');
        this.classList.add('active');
    }
})
