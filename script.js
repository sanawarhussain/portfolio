/* =================================
   HERO PARTICLES
================================= */

const particlesContainer = document.querySelector(".particles");

const particleCount = 100;

for (let i = 0; i < particleCount; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    // Random horizontal position
    particle.style.left = Math.random() * 100 + "%";

    // Random vertical position
    particle.style.top = Math.random() * 100 + "%";

    // Random animation duration
    particle.style.animationDuration =
        (4 + Math.random() * 6) + "s";

    // Random animation delay
    particle.style.animationDelay =
        (Math.random() * 6) + "s";

    // Random size
    const size = 2 + Math.random() * 4;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particlesContainer.appendChild(particle);
}


/* =================================
   MOUSE FOLLOWING GLOW
================================= */

const hero = document.querySelector(".hero-section");
const mouseGlow = document.querySelector(".mouse-glow");

hero.addEventListener("mousemove", function (event) {

    const rect = hero.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseGlow.style.left = x + "px";
    mouseGlow.style.top = y + "px";

});


/* Hide glow when mouse leaves hero */

hero.addEventListener("mouseleave", function () {

    mouseGlow.style.opacity = "0";

});


/* Show glow when mouse enters hero */

hero.addEventListener("mouseenter", function () {

    mouseGlow.style.opacity = "1";

});


/* =====================================================
   NAVBAR SCROLL EFFECT
   ===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   SCROLL REVEAL
   ===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );


const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
   ===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar .nav-link");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});




  const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    themeBtn.textContent =
        document.body.classList.contains("light-mode")
            ? "🌙"
            : "☀";
});