

//Here we are going to create make the navigation be sticked when scrolled down the page.

const nav = document.querySelector('#main')
const topOfNav = nav.offsetTop; // brings us the value in px of the top of the navigation or tag you indicate

function fixNav(){
if (window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + 'px';   // Here when fixed-nav class appears it means nav tag doesn't 
    document.body.classList.add('fixed-nav');         //take space anymore and div jumps up, to avoid it we say be equal to 
} else {                                            // offsetHeight in px
    document.body.style.paddingTop = 0
    document.body.classList.remove('fixed-nav');
}
}

window.addEventListener('scroll', fixNav);