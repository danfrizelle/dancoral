function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time in days
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length); // Remove leading spaces
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const allowedNames = [
    {
        first: "Dan",
        last: "Frizelle",
        plusOne: { first: "Test", last: "Surname" }
    },
    {
        first: "Coral",
        last: "Parker",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Melanie",
        last: "Parker",
        // plusOne: { first: "Travis", last: "Kelce" }
    },
    {
        first: "Indie",
        last: "Parker",
        plusOne: { first: "Tim", last: "West" }
    },
    {
        first: "Lauren",
        last: "Button",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Kelly",
        last: "Morton",
        plusOne: { first: "Ross", last: "Martin" }
    },
    {
        first: "Becca",
        last: "Oliver",
        plusOne: { first: "Jamie", last: "Grounsell" }
    },
    {
        first: "Charlotte",
        last: "Maddox",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Adam",
        last: "Stones",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Molly",
        last: "Jakes",
        plusOne: { first: "Jamie", last: "Smith-Squire" }
    },
    {
        first: "Perri",
        last: "Discoll",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Terri",
        last: "Harvey",
        plusOne: { first: "Anna", last: "Minter" }
    },
    {
        first: "Georgia",
        last: "Mateer",
        plusOne: { first: "Olivia", last: "Richardson" }
    },
    {
        first: "Georgia",
        last: "Tozer",
        plusOne: { first: "Lucy", last: "Cous" } //Confirm name
    },
    {
        first: "Emma",
        last: "Riordan",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Janvee",
        last: "Ruparelia",
        plusOne: { first: "Akash", last: "Ruparelia" }
    },
    {
        first: "Sareeta",
        last: "Bagri",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Ben",
        last: "Kelly",
        plusOne: { first: "Jen", last: "Schramm" } //Confirm name
    },
    {
        first: "Ben",
        last: "Williams",
        plusOne: { first: "Kate", last: "Goldrich" }
    },
    {
        first: "Sean",
        last: "Irvin",
        plusOne: { first: "Sammie", last: "Callow" }
    },
    {
        first: "Jordan",
        last: "Lilley",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Janine",
        last: "Frizelle",
        plusOne: { first: "Fay", last: "Davies" }
    },
    {
        first: "Sam",
        last: "Axworthy",
        plusOne: { first: "Alfie", last: "Axworthy" }
    },
    {
        first: "Essel",
        last: "Uysal",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Tom",
        last: "Gregory",
        // plusOne: { first: "TBC", last: "TBC" }
    },
    {
        first: "Viv",
        last: "Bryans",
        // plusOne: { first: "TBC", last: "TBC" }
    }
];


function showRSVPForm() {
    const firstNameInput = document.getElementById("firstNameInput").value.trim();
    const lastNameInput = document.getElementById("lastNameInput").value.trim();
    const name = document.getElementById("name");
    const nameHeading = document.getElementById("nameHeading");

    const plusOneName = document.getElementById("plusOneName");
    const plusOneNameHeading = document.getElementById("plusOneNameHeading");

    const matchedPerson = allowedNames.find(person =>
        person.first.toLowerCase() === firstNameInput.toLowerCase() &&
        person.last.toLowerCase() === lastNameInput.toLowerCase()
    );

    if (matchedPerson) {
        document.getElementById("name-entry").classList.add("d-none");
        document.getElementById("rsvp-form").classList.remove("d-none");
        var fullName = `${firstNameInput} ${lastNameInput}`
        name.value = fullName;
        name.disabled = true;

        // nameHeading.innerHTML = fullName;

        // Set cookies
        setCookie("firstName", firstNameInput, 7);
        setCookie("lastName", lastNameInput, 7);

        // Show plus one fields if applicable
        const plusOneContainer = document.getElementById("plus-one-fields");
        if (matchedPerson.plusOne && plusOneContainer) {
            plusOneContainer.classList.remove("d-none");

            // Combine plus one's first and last name
            var plusOneFullName = `${matchedPerson.plusOne.first} ${matchedPerson.plusOne.last}`;
            plusOneName.value = plusOneFullName;
            plusOneName.disabled = true;

            // plusOneNameHeading.innerHTML = `${matchedPerson.plusOne.first} ${matchedPerson.plusOne.last}`;
        }
        if (matchedPerson.plusOne) {
            var combinedNames = `${fullName} & \n ${plusOneFullName}`;
        } else {
            var combinedNames = `${fullName}`;
        }
        const combinedNamesContainer = document.getElementById("combinedHeadingContainer");
        combinedNamesContainer.innerText = combinedNames;
    } else {
        alert("Your name is not on the guest list.");
    }
}



// On page load or when needed, you can check for the cookies and pre-fill the fields
const storedFirstName = getCookie("firstName");
const storedLastName = getCookie("lastName");

// Check if the element with id "firstNameInput" and "firstName" exist
const firstNameInput = document.getElementById("firstNameInput");
var firstName = document.getElementById("firstName");

if (storedFirstName && firstNameInput) {
    firstNameInput.value = storedFirstName;
} else if (storedFirstName && firstName) {
    firstName.innerText = storedFirstName;
    firstName.innerText += ", "; //append a comma for the personalised banner
}

// Check if the element with id "lastNameInput" and "lastName" exist
const lastNameInput = document.getElementById("lastNameInput");
const lastName = document.getElementById("lastName");

if (storedLastName && lastNameInput) {
    lastNameInput.value = storedLastName;
} else if (storedLastName && lastName) {
    lastName.innerText = storedLastName;
}



let bannerText = document.getElementById("banner-text");
let text = bannerText.innerText;
bannerText.innerHTML = ""; // Clear original text

// Wrap each letter in a span and apply delay
text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.innerText = char;
    span.style.animationDelay = `${index * 0.1}s`; // Delay increases per letter
    bannerText.appendChild(span);
});






/* const allowedNames = [
    { first: "Dan", last: "Frizelle" },
    { first: "Coral", last: "Parker" }
];

function login() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const errorText = document.getElementById("error");

    // Validate user
    const isValidUser = allowedNames.some(user => 
        user.first.toLowerCase() === firstName.toLowerCase() && 
        user.last.toLowerCase() === lastName.toLowerCase()
    );

    if (isValidUser) {
        // Store session data and redirect immediately
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        location.replace(sessionStorage.getItem("redirectTo") || "/"); // Faster redirection
    } else {
        errorText.textContent = "❌ Invalid name. Access denied.";
    }
} */







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


/* Animation */
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
            animationObserver.unobserve(entry.target);
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