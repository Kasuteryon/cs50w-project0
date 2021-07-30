const backToTop = document.getElementById('back-to-top');
//const header = document.getElementById('top-element');

backToTop.addEventListener('click', () => {
    window.scrollTo(0,0);
    //header.focus();
});

// SCROLLOING ANIMATION

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

// CODE FROM STACKOVERFLOW, siempre salvando nuestras vidas los panas :)
/*const callback = (entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach((target) => {
    observer.observe(target);
  });*/
  function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
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