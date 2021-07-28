const backToTop = document.getElementById('back-to-top');
//const header = document.getElementById('top-element');

backToTop.addEventListener('click', () => {
    window.scrollTo(0,0);
    //header.focus();
});