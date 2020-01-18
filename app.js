const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const close = document.querySelector('.close');
const logo = document.querySelector('.logo-container img')
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
