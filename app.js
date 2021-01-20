// Navbar effects on scroll

const header = document.querySelector('header');
const body = document.querySelector('body');
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {  
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});