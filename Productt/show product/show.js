
var element = document.getElementById("AllContainer");
element.style.display = "grid";
var element = document.getElementById("NearExpiryContainer");
element.style.display = "none";
function All() {

    var element = document.getElementById("AllContainer");
    element.style.display = "grid";
    var element = document.getElementById("NearExpiryContainer");
    element.style.display = "none";
}
function NearExpiry() {
    var element = document.getElementById("AllContainer");
    element.style.display = "none";
    var element = document.getElementById("NearExpiryContainer");
    element.style.display = "grid";
}

