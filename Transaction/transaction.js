

var blockbtn = document.getElementById("options");

blockbtn.style.display = "none"

var flag = false;

function showOption() {
    if ( !flag ){
        blockbtn.style.display = "block"
        flag = true;
    }
    else {
        blockbtn.style.display = "none"
        flag = false;
    }

}

document.getElementById("page").innerHTML = "Transaction";



var element = document.getElementById("sellContainer");
element.style.display = "none";
var element = document.getElementById("buyContainer");
element.style.display = "grid";
var element = document.getElementById("historyContainer");
element.style.display = "none";
function buy() {
    var element = document.getElementById("sellContainer");
    element.style.display = "none";
    var element = document.getElementById("buyContainer");
    element.style.display = "grid";
    var element = document.getElementById("historyContainer");
    element.style.display = "none";
}
function sell() {
    var element = document.getElementById("sellContainer");
    element.style.display = "grid";
    var element = document.getElementById("buyContainer");
    element.style.display = "none";
    var element = document.getElementById("historyContainer");
    element.style.display = "none";
}
function history() {
    var element = document.getElementById("sellContainer");
    element.style.display = "none";
    var element = document.getElementById("buyContainer");
    element.style.display = "none";
    var element = document.getElementById("historyContainer");
    element.style.display = "grid";
}

  