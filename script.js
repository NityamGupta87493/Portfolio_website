const menuIcon = document.querySelector("#menu-icon")
const navLinks = document.querySelector(".nav-links")
let menuClicked = false

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation()  
    if (!menuClicked) {
        navLinks.style.display = "block"
        menuClicked = true
    } else {
        navLinks.style.display = "none"
        menuClicked = false
    }
})

window.addEventListener('click', () => {
    if (menuClicked) {
        navLinks.style.display = "none"
        menuClicked = false
    }
})

navLinks.addEventListener('click', (e) => {
    e.stopPropagation()
})

let contact=document.querySelector(".contact-link")
contact.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth' 
    })
})
let visitGithub_1=document.querySelector(".visit-btn")
visitGithub_1.addEventListener('click',()=>{
    window.open("https://github.com/NityamGupta87493")
})
let visitGithub_2=document.querySelector(".fa-github")
visitGithub_2.addEventListener('click',()=>{
    window.open("https://github.com/NityamGupta87493")
})
