(function () {
    const password = sessionStorage.getItem("password");

    // Function to check if user is logged in
    const isLoggedIn = !!password;

    if (!isLoggedIn) {
        sessionStorage.setItem("redirectTo", window.location.href);
        location.replace("/login.html"); // Faster redirection
    }

    // Logout function
    function logout() {
        sessionStorage.removeItem("password"); // Clears only the password from sessionStorage
        location.replace("/login.html");
    }

    // Attach logout function globally
    window.addEventListener("logout", logout);
    window.logout = logout;
})();
