//MOUSEOVER
const navStuff = document.querySelectorAll(`nav a`);
navStuff[0].addEventListener(`mouseover`, event => {
    navStuff[0].style.color = `blue`
});
navStuff[1].addEventListener(`mouseover`, event => {
    navStuff[1].style.color = `green`
});
navStuff[2].addEventListener(`mouseover`, event => {
    navStuff[2].style.color = `white`
});
navStuff[3].addEventListener(`mouseover`, event => {
    navStuff[3].style.color = `blue`
});

const myNav = document.querySelector("h1");
console.log(myNav);
myNav.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    myNav.style.color = "black";
});



//Load event
window.addEventListener('load', (event) => {
    console.log('Welcome to Springfield!');
});