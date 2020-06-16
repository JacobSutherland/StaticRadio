const dropDown = document.querySelector('.drop-down');
const exitIcon = document.querySelector('.close-menu')
const header = document.querySelector('header:nth-of-type(1)');
const nav = document.querySelector('.header-nav');
const headerLinks = document.querySelectorAll('.header-nav a');

dropDown.addEventListener('click', () =>{
    //opens navigation to mobile display on click
    dropDown.style.display = 'none';
    exitIcon.style.display = 'block';
    exitIcon.classList.toggle('close');
    nav.classList.toggle('mobile-nav');
    header.style.padding = '0';
 
    for(let i = 0; i < headerLinks.length; i++){
    headerLinks[i].style.display = 'initial';
    }
    console.log('lick');
});

//closes drop down menu on close icon click
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

// Closes drop down menu if an option is choosen 
for(let i = 0; i < headerLinks.length; i++){
    headerLinks[i].addEventListener('click', () => {
        dropDown.style.display = 'block';
        exitIcon.style.display = 'none';
        exitIcon.classList.toggle('close');
        nav.classList.toggle('mobile-nav');
        header.style.padding = '40px';
    
        for(let i = 0; i < headerLinks.length; i++){
        headerLinks[i].style.display = 'none';
        }    
    })
}