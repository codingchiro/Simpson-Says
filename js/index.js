//MOUSEOVER the NavBar
const navStuff = document.querySelectorAll(`nav a`);
navStuff[0].addEventListener(`mouseover`, event => {
    navStuff[0].style.color = `darkorchid`
});
navStuff[1].addEventListener(`mouseover`, event => {
    navStuff[1].style.color = `green`
});
navStuff[2].addEventListener(`mouseover`, event => {
    navStuff[2].style.color = `black`
});
navStuff[3].addEventListener(`mouseover`, event => {
    navStuff[3].style.color = `purple`
});

//MouseOver h1
const myNav = document.querySelector("h1");
console.log(myNav);
myNav.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    myNav.style.color = "black";
});


//MouseOver COnversation Bubbles
const newPhrase = document.querySelectorAll(`.circular-sb`);
newPhrase[0].addEventListener(`mouseover`, event => {
    newPhrase[0].innerHTML = "D'oh!"
});


newPhrase[1].addEventListener(`mouseover`, event => {
    newPhrase[1].innerHTML = "Cowabunga!"
})



//Load event
window.addEventListener('load', (event) => {
    console.log('Welcome to Springfield!');
});


//A Little DOM Date Manipulation
const dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();