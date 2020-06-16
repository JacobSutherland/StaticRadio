const dropDown = document.querySelector('.drop-down');
const exitIcon = document.querySelector('.close-menu')
const header = document.querySelector('#home header');
const nav = document.querySelector('.header-nav');
const headerLinks = document.querySelectorAll('.header-nav a');
const homeSection = document.querySelector('#home');
const logo = document.querySelector('.logo');

//Counter enables us to toggle styles on and off depending on whether it is even or odd.
let counter = 1;

dropDown.addEventListener('click', () =>{
    //toggles navigation to mobile display on click
    dropDown.style.display = 'none';
    exitIcon.style.display = 'block';
    exitIcon.classList.toggle('close');
    nav.classList.toggle('mobile-nav');
    header.style.padding = '0';
 
    for(let i = 0; i < headerLinks.length; i++){
    headerLinks[i].style.display = 'initial';
    }
    console.log(counter);
});


exitIcon.addEventListener('click', () => {
    dropDown.style.display = 'block';
    exitIcon.style.display = 'none';
    exitIcon.classList.toggle('close');
    nav.classList.toggle('mobile-nav');
    header.style.padding = '40px';

    for(let i = 0; i < headerLinks.length; i++){
    headerLinks[i].style.display = 'none';
    }
})
