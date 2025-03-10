window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("sticky", window.scrollY > 0);
})

const menuBtn = document.querySelector(".menu-btn");
const navigationSection = document.querySelector(".navigation-section");
const navigationItems = document.querySelectorAll(".navigation-section a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigationSection.classList.toggle("active");
})

navigationItems.forEach(navigationItem => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigationSection.classList.remove("active");
    })
})

const scrollBtn = document.querySelector(".scroll-to-top-btn");

window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
})

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", reveal);