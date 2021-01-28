// Navbar effects on scroll

const header = document.querySelector('header');
const body = document.querySelector('body');
const nav = document.querySelector('nav');

// window.addEventListener('scroll', function() {
//   
//   if (prevScrollpos > currentScrollPos) {
//     header.classList.add('scrolled');
//   } else {
//     header.classList.remove('scrolled');
//   }
//   prevScrollpos = currentScrollPos;


  window.addEventListener('scroll', function() {  
  if (window.pageYOffset > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// window.onscroll = scrollShowNav;
// function scrollShowNav() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       header.style.top = "-100px";
//    } else {
//       header.style.top = "0px";
//    }
// }