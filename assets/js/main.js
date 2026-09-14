/*MENU*/
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("bx-menu");
        icon.classList.add("bx-x");
    } else {
        icon.classList.remove("bx-x");
        icon.classList.add("bx-menu");
    }
});

/*GALERIA*/
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

next.addEventListener("click", () => {
    
    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
})

prev.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current)
});

setInterval(() => {

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
}, 5000);