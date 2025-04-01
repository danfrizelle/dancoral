// NOT IN USE YET

(function () {
    const firstName = sessionStorage.getItem("firstName");
    const lastName = sessionStorage.getItem("lastName");

    // Function to check if user is logged in
    const isLoggedIn = !!(firstName && lastName);

    if (!isLoggedIn) {
        sessionStorage.setItem("redirectTo", window.location.href);
        location.replace("/login.html"); // Faster redirection
    }

    // Logout function
    function logout() {
        sessionStorage.clear(); // Clears all sessionStorage values
        location.replace("/login.html");
    }

    // Attach logout function globally
    window.addEventListener("logout", logout);
    window.logout = logout;
})();
