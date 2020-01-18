const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const close = document.querySelector('.close');
const logo = document.querySelector('.logo-container img')
const social_icon = document.querySelectorAll('.social li a');
const social_Style = document.querySelectorAll('.social path');
const copyright=document.querySelector('.copy h4')

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.style.display = "none";
    close.style.display = "block";

    close.style.transition = "all 0.5s ease 0.4s"
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
close.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    close.style.display = "none";
    hamburger.style.display = "block";
    hamburger.style.transition = "all 0.5s ease 0.4s"
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
logo.addEventListener("click", () => {
    if (navLinks.classList[1] == 'open') {
        navLinks.classList.toggle("open");
        close.style.display = "none";
        hamburger.style.display = "block";
        hamburger.style.transition = "all 0.5s ease 0.4s"
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    }
});
social_icon.item(0).setAttribute('href', 'https://www.youtube.com/channel/UCCrtm7dNcQp1dsULnYZFj5g');
social_icon.item(1).setAttribute('href', 'https://www.facebook.com/advayaofficial/')
social_icon.item(2).setAttribute('href', 'https://www.instagram.com/advayaofficial/?igshid=16qv7yss1xuyo');
social_Style.forEach((child) => {
    child.setAttribute('fill', '#1D2326')
    child.setAttribute('fill-opacity', '0.8')

})
console.log(copyright.textContent="2020 © Advaya All Rights Reserved")
