let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}  


const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://iib2lyr6v7njzrudnyueamrcuq0ousrq.lambda-url.eu-central-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Besucher: ${data}`;
}
updateCounter();