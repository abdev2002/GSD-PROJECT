function getdata() {
    var jsonData = [
        {
            "Products": "Pat Black",
            "Items": "25",
            "DaysLeft": "30",
            
        },

        {  
            "Products": "Angel Jones",
            "Items": "66",
            "DaysLeft": "20",
        },

        {
            "Products": "Max Edwards",
            "Items": "3",
            "DaysLeft": "10",
        },

        { 
            "Products": "Bruce Fox",
            "Items": "120",
            "DaysLeft": "15",
        },

        {
            "Products": "Devon Fisher",
            "Items": "15",
            "DaysLeft": "25",
        },
    ];
    return jsonData;
}
console.log('fjfjfjjfi');

function setdata() {
    var jsonData = getdata();

    var table = document.getElementById("table1");
    if (!table) {
        console.error("Table element not found.");
        return;
    }

    jsonData.forEach(data => {
        // Extract data from JSON
       
        var products = data.Products;
        var items = data.Items;
        var daysleft = data.DaysLeft;
        
        // Create a new row in the table
        var row = table.insertRow();

        // Insert cells with data
        var productsCell = row.insertCell();
        productsCell.innerHTML = products;
        var itemsCell = row.insertCell();
        itemsCell.innerHTML = items;
        var daysleftCell = row.insertCell();
        daysleftCell.innerHTML = daysleft;
        
    });
}

setdata();


