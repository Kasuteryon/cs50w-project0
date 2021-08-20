// SCROLL CHANGE NAVBAR POSITION 7u7
window.addEventListener('scroll', () =>{
  let nav = document.querySelector('nav');

  if (window.scrollY > 300)
  {
    nav.classList.remove('sticky-top');
    nav.classList.remove('medium-nav');
    //nav.classList.remove('navbar-dark');
   // nav.classList.add('navbar-light');
    nav.classList.add('fixed-bottom');
  }else{
    nav.classList.remove('fixed-bottom');
    
    nav.classList.add('sticky-top');
  }
  
});

// DETETCS VIEWPORT FOR TRIGGER CSS ANIMATIONS ^u^

let scroll = window.requestAnimationFrame || ((callback) =>{
    window.setTimeout(callback, 1000/6)
});

let elementsToShow = document.querySelectorAll('.show-on-scroll');

const loop = () => {
    elementsToShow.forEach((element) => {
        if (isElementInViewport(element)){
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
};

loop();

function isElementInViewport(el) {
    
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  let rect = el.getBoundingClientRect();

  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// APPLIES DARK MODE :3
theme.addEventListener('click', () => {
  let body = document.body;
  body.classList.toggle("dark-mode");
});

