function getdata() {
    var jsonData = [
        {
            "ID": "1",
            "Date": "2023-05-01",
            "Name": "Product A",
            "Price": "$10.99",
            "Quantity": "5",
            "Type": "Electronics"
        },
        {
            "ID": "2",
            "Date": "2023-05-02",
            "Name": "Product B",
            "Price": "$8.99",
            "Quantity": "10",
            "Type": "Clothing"
        },
        {
            "ID": "3",
            "Date": "2023-05-03",
            "Name": "Product C",
            "Price": "$15.99",
            "Quantity": "3",
            "Type": "Home Appliances"
        },
        {
            "ID": "4",
            "Date": "2023-05-04",
            "Name": "Product D",
            "Price": "$5.49",
            "Quantity": "8",
            "Type": "Books"
        },
        {
            "ID": "5",
            "Date": "2023-05-05",
            "Name": "Product E",
            "Price": "$20.99",
            "Quantity": "2",
            "Type": "Electronics"
        },
        {
            "ID": "6",
            "Date": "2023-05-06",
            "Name": "Product F",
            "Price": "$12.49",
            "Quantity": "6",
            "Type": "Clothing"
        },
        {
            "ID": "7",
            "Date": "2023-05-07",
            "Name": "Product G",
            "Price": "$9.99",
            "Quantity": "4",
            "Type": "Home Appliances"
        },
        {
            "ID": "8",
            "Date": "2023-05-08",
            "Name": "Product H",
            "Price": "$7.99",
            "Quantity": "9",
            "Type": "Books"
        },
        {
            "ID": "9",
            "Date": "2023-05-09",
            "Name": "Product I",
            "Price": "$14.99",
            "Quantity": "7",
            "Type": "Electronics"
        }
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

    jsonData.forEach(data => {
        // Extract data from JSON
        var id = data.ID;
        var date = data.Date;
        var name = data.Name;
        var price = data.Price;
        var quantity = data.Quantity;
        var type = data.Type;

        // Create a new row in the table
        var row = table.insertRow();

        // Insert cells with data
        var idCell = row.insertCell();
        idCell.innerHTML = id;
        var dateCell = row.insertCell();
        dateCell.innerHTML = date;
        var nameCell = row.insertCell();
        nameCell.innerHTML = name;
        var priceCell = row.insertCell();
        priceCell.innerHTML = price;
        var quantityCell = row.insertCell();
        quantityCell.innerHTML = quantity;
        var typeCell = row.insertCell();
        typeCell.innerHTML = type;
    });
}

setdata();
