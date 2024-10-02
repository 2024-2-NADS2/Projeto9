/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navAlternar = document.getElementById('nav-alternar'),
      navFechar = document.getElementById('nav-fechar')

/* Mostrar menu */
if(navAlternar){
    navAlternar.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Fechar menu */
if(navFechar){
    navFechar.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const carrosselImages = document.querySelector(".carrossel-images")
const images = carrosselImages.querySelectorAll("img")
const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")
let currentIndex = 0

function showImage(index){
    const offset = -index*100
    carrosselImages.style.transform = `translateX(${offset}%)`
}

prevButton.addEventListener("click", () =>{
    currentIndex = (currentIndex === 0) ? images.length -1 : currentIndex -1
    showImage(currentIndex)
})

nextButton.addEventListener("click", () =>{
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex +1
    showImage(currentIndex)
})