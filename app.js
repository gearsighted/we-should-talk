const header = document.querySelector('header');
const body = document.querySelector('body');
const nav = document.querySelector('nav');


// All pages:
    // Navbar hide on scroll--check--
        //hide effect transition fix
// Index.html:
    // Hero Image Carousel
    // Latest episode image focus effect
    // 
// Episodes.html:
    // Hover effect on hero?
    // Latest episode image focus effect
// Episode1.html:
    // // Hover effect on hero?    
// About.html:
    // Hover effect on hero?    
    
let scrollPos = 0;

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    header.classList.add('is-visible');
    header.classList.remove('is-hidden');
  } else {
    // Scrolling DOWN
    header.classList.add('is-hidden');
    header.classList.remove('is-visible');
  }
  scrollPos = windowY;
}

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener('scroll', debounce(checkPosition));
