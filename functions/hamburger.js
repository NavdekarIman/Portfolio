const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-item");
const tls = gsap.timeline({defaults: { ease: "power1.out" }})

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    animResponsive();
}

function animResponsive(){
    if (navMenu.classList.contains("active")) {
        tls.fromTo('.nav-links.active li', {x: "500%", opacity:"0"}, {x: "0%", opacity:"1", duration: 0.6, stagger: 0.25, delay: 0.2});
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "initial";
    }
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "initial"; 
}