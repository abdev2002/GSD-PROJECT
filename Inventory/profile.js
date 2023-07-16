

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

document.getElementById("page").innerHTML = "Employee";

function optOne(){
    window.location = "/Profile/profile.html"; // Redirecting to other page.
}function optTwo(){
    window.location = "/Transaction/transaction.html"; // Redirecting to other page.
}function optThree(){
    window.location = "/Transaction/transaction.html"; // Redirecting to other page.
}function optFour(){
    window.location = "/Transaction/transaction.html"; // Redirecting to other page.
}
function profile() {
    window.location = "/Profile/profile.html"; // Redirecting to other page.
}

function getdata() {
    var jsonData = [
        {
          "name": "Abdullah",
          "email": "www.abdullah@hotmail.com",
          "password": "1234",
          "Date": "2023-06-20"
        }
      ];
      return jsonData;
}

function setdata() {   
     var jsonData = getdata();

    // Extract data from JSON
    var name = jsonData[0].name;
    var email = jsonData[0].email;
    var date = jsonData[0].Date;
    
    // Insert values into HTML elements
    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = email;
    document.getElementById('date').textContent = date;
    
}

setdata();