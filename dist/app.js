//get the button
const btn = document.getElementById("mobileNavBtn")
const navigation = document.getElementById("navigation")
const navOverlay = document.querySelector(".navOverlay")
let isOpen = false
//on click increase the widith and make after element visible
//change the photo
btn.addEventListener('click',()=>!isOpen ? openNav() : closeNav())

navOverlay.addEventListener('click',()=>closeNav())

const openNav = ()=>{
    navigation.style.width = '95%'
    navOverlay.style.display = "block"
    btn.firstChild.src = 'https://areactdeveloper.github.io/Mobile-First-News-Home-Page-With-SASS/assets/images/icon-menu-close.svg'
    isOpen = true
}
const closeNav = ()=>{
    navigation.style.width = '0px'
    navOverlay.style.display = "none"
    btn.firstChild.src = 'https://areactdeveloper.github.io/Mobile-First-News-Home-Page-With-SASS/assets/images/icon-menu.svg'
    isOpen = false
}
