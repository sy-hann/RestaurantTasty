'use strict';

// Show Scroll Top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class 
    //to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top')
    else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop);
