const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const accordion = document.querySelectorAll(".accordion-title");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeContent() {
    accordion.forEach(accordion => {
        accordion.nextElementSibling.classList.remove("height"); 
               
    })
}

accordion.forEach(button => {
    button.onclick = ()=> {
        closeContent();
            button.nextElementSibling.classList.toggle("height");
    }
})

