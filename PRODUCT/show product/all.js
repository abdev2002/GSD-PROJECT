function getdata() {
    var jsonData = [
        {
            

            "Products": "Pat Black",
            "Items": "25",
            "Price": "$45.00",
            
        },
        {  
            "Products": "Angel Jones",
            "Items": "66",
            "Price": "$32.00", 
        },
        {
            "Products": "Max Edwards",
            "Items": "3",
            "Price": "$15.50",
        },
        { 
            "Products": "Bruce Fox",
            "Items": "120",
            "Price": "$8.01",
        },
        {
            "Products": "Devon Fisher",
            "Items": "15",
            "Price": "$9.99",
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

    jsonData.forEach(data => {
        // Extract data from JSON
       
        var products = data.Products;
        var items = data.Items;
        var price = data.Price;
        
        // Create a new row in the table
        var row = table.insertRow();

        // Insert cells with data
       
        var productsCell = row.insertCell();
        productsCell.innerHTML = products;
        var itemsCell = row.insertCell();
        itemsCell.innerHTML = items;
        var priceCell = row.insertCell();
        priceCell.innerHTML = price;
        
    });
}

setdata();


