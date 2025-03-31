function countdown() {
    const weddingDate = new Date("2026-10-05T00:00:00").getTime();
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Today is the big day!";
        }
    }, 1000);
}


if (document.getElementById("countdown")) {
    document.body.onload = countdown();
}


const allowedNames = [
    { first: "Dan", last: "Frizelle" },
    { first: "Coral", last: "Parker" }
];

function showRSVPForm() {
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const name = document.getElementById("name");

    const isValidName = allowedNames.some(person =>
        person.first.toLowerCase() === firstName.toLowerCase() &&
        person.last.toLowerCase() === lastName.toLowerCase()
    );

    if (isValidName) {
        document.getElementById("name-entry").classList.add("d-none");
        document.getElementById("rsvp-form").classList.remove("d-none");
        name.value = `${firstName} ${lastName}`;
        name.disabled = true;
    } else {
        alert("Your name is not on the guest list.");
    }
}


let bannerText = document.getElementById("banner-text");
let text = bannerText.innerText;
bannerText.innerHTML = ""; // Clear original text

// Wrap each letter in a span and apply delay
text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.innerText = char;
    span.style.animationDelay = `${index * 0.05}s`; // Delay increases per letter
    bannerText.appendChild(span);
});








const animationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const delay = entry.target.getAttribute('data-delay') || '0';
        const duration = entry.target.getAttribute('data-duration') || '1';

        let direction;
        if (window.matchMedia('(min-width: 992px)').matches) {
            direction = entry.target.getAttribute('data-direction-desktop') || 'bottom';
        } else if (window.matchMedia('(min-width: 768px)').matches) {
            direction = entry.target.getAttribute('data-direction-tablet') || entry.target.getAttribute('data-direction-desktop') || 'bottom';
        } else {
            direction = entry.target.getAttribute('data-direction-mobile') || entry.target.getAttribute('data-direction-desktop') || 'bottom';
        }

        entry.target.classList.toggle(`fade-in-${direction}`, entry.isIntersecting);
        entry.target.style.animationDelay = `${delay}s`;
        entry.target.style.animationDuration = `${duration}s`;

        if (entry.isIntersecting) {
            animationObserver.unobserve(entry.target); // Stop observing the element after animation
        }
    });
}, {
    threshold: 0 // Trigger the animation when the element is 0% visible
});



const animationItems = document.querySelectorAll('.animation-item');

animationItems.forEach(item => {
    console.log(item);
    animationObserver.observe(item);
});