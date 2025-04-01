(function () {
    // Function to check if user is logged in
    function isLoggedIn() {
        return sessionStorage.getItem("firstName") && sessionStorage.getItem("lastName");
    }

    if (!isLoggedIn()) {
        // Store the current URL before redirecting
        sessionStorage.setItem("redirectTo", window.location.href);
        window.location.href = "/login.html"; // Redirect to login page
    }

    // Logout function
    window.logout = function () {
        sessionStorage.removeItem("firstName");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("redirectTo");
        window.location.href = "/login.html"; // Redirect to login after logout
    };
})();
