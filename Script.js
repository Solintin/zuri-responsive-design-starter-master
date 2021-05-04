const navLink = document.querySelector('.nav-bar .nav-links');
const menuBar = document.querySelector('.nav-bar .menu-bar');
const menuIcon = document.querySelector('.nav-bar .menu-bar i');

menuBar.addEventListener("click", ()=>{
    navLink.classList.toggle('active');
    menuIcon.classList.toggle('active')
})