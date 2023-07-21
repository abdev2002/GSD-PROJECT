function getdata() {
  var jsonData = [
    {
      ID: "1",
      Name: "M Abdullah",
      Gender: "Male",
      Email: "example@example.com",
      Age: "20",
      EmployeeType: "Full-time",
    },
    {
      ID: "2",
      Name: "Ayesha Ali",
      Gender: "Female",
      Email: "example@example.com",
      Age: "22",
      EmployeeType: "Part-time",
    },
  ];
  return jsonData;
}

function setdata() {
  var jsonData = getdata();
  var table = document.getElementById("mytable");
  if (!table) {
    console.error("Table element not found.");
    return;
  }

  jsonData.forEach((data) => {
    // Extract data from JSON
    var id = data.ID;
    var name = data.Name;
    var gender = data.Gender;
    var email = data.Email;
    var age = data.Age;
    var employeeType = data.EmployeeType;

    // Create a new row in the table
    var row = table.insertRow();

    // Insert cells with data
     var idCell = row.insertCell();
     idCell.innerHTML = id;
    var nameCell = row.insertCell();
    nameCell.innerHTML = name;
    var genderCell = row.insertCell();
    genderCell.innerHTML = gender;
    var emailCell = row.insertCell();
    emailCell.innerHTML = email;
    var ageCell = row.insertCell();
    ageCell.innerHTML = age;
    var employeeTypeCell = row.insertCell();
    employeeTypeCell.innerHTML = employeeType;
  });
}

setdata();