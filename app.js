// Navbar effects on scroll

let header = document.querySelector('header');
let body = document.querySelector('body');

window.addEventListener('scroll', function() {  
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});