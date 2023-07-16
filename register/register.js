function register() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var compName = document.getElementById("compName").value;
    var address = document.getElementById("address").value;

    if (pass1 == pass2) {
        alert("Login successfully");
        window.location = "/login.html"; // Redirecting to other page.
        return false;
    }
    else {
        alert("Password doesnt match.");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
        document.getElementById("compName").value = "";
        document.getElementById("address").value = "";
    }
}