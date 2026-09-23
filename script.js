// ================= CONTACT FORM =================

const form = document.querySelector("form");
const formMessage = document.querySelector("#form-message");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (formMessage) {
            formMessage.textContent = "Message sent successfully!";
        }

        form.reset();

        // Hide message after 3 seconds
        setTimeout(function () {
            if (formMessage) {
                formMessage.textContent = "";
            }
        }, 3000);
    });
}


// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        // Change menu icon
        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });
}


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }
    });
});


// ================= DARK / LIGHT MODE =================

const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {

    // Remember user's theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☼";
    } else {
        themeToggle.textContent = "◐";
    }


    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☼";
            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "◐";
            localStorage.setItem("theme", "light");

        }
    });
}