// Redirect if not logged in
netlifyIdentity.on("init", (user) => {
    if (!user) {
        // If user is not logged in, redirect to login page
        const currentUrl = window.location.href; // Store the current URL
        localStorage.setItem("redirectTo", currentUrl); // Save the URL in localStorage
        window.location.href = "login.html"; // Redirect to login page
    }
});

// Handle logout
netlifyIdentity.on("logout", () => {
    window.location.href = "login.html"; // Redirect after logout
});