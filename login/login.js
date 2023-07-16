var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("userfield").value;
    var password = document.getElementById("passfield").value;
    if (username == "alpha" && password == "beta") {
        // alert("Login successfully");
        window.location = "/Inventory/profile.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("userfield").disabled = true;
            document.getElementById("passfield").disabled = true;
            document.getElementById("btn").disabled = true;
            return false;
        }

    }
}