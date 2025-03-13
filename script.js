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