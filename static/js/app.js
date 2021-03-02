// from data.js
var tableData = data;

// Referencing the table body that is in the HTML file
var tbody = d3.select("tbody");

// Code Without Arrow Functions
// tableData.forEach(function(ufoFinder) {
//     console.log(ufoFinder);
//     var row = tbody.append("tr");

//     Object.entries(ufoFinder).forEach(function([key, value]) {
//         console.log(key, value);

//         var cell = tbody.append("td");
//         cell.text(value);
//     });
// });

// Level 1 ----------------------------------------------------------------
// Loops through each item in the data
tableData.forEach((ufoFinder) => {
    // console.log(ufoFinder);
    var row = tbody.append("tr");

    Object.entries(ufoFinder).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});


// Level 2 ----------------------------------------------------------------
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Clears the starting data on table
    var clearing = d3.selectAll("td");
    clearing.remove();

    d3.event.preventDefault();

    var inputDateElement = d3.select("#datetime");
    var inputDateValue = inputDateElement.property("value");

    var inputCityElement = d3.select("#city-filter");
    var inputCityValue = inputCityElement.property("value");

    var inputStateElement = d3.select("#state-filter");
    var inputStateValue = inputStateElement.property("value");

    var inputCountryElement = d3.select("#country-filter");
    var inputCountryValue = inputCountryElement.property("value");

    var inputShapeElement = d3.select("#shape-filter");
    var inputShapeValue = inputShapeElement.property("value");

    // Creating a variable to hold the first search parameter.
    // Using If statements to make sure Arrays are returned
    // Filtering by date 
    var searchData1 = tableData.filter(data => data.datetime === inputDateValue);
    console.log(searchData1);
    if (searchData1.length > 0) {
        searchData1 = searchData1;
    } else {
        searchData1 = tableData;
    }
    console.log(searchData1);

    //Filtering by city
    var searchData2 = searchData1.filter(data => data.city === inputCityValue);
    console.log(searchData2);
    if (searchData2.length > 0) {
        searchData2 = searchData2;
    } else {
        searchData2 = searchData1;
    }
    console.log(searchData2);

    //Filtering by state
    var searchData3 = searchData2.filter(data => data.state === inputStateValue);
    console.log(searchData3);
    if (searchData3.length > 0) {
        searchData3 = searchData3;
    } else {
        searchData3 = searchData2;
    }
    console.log(searchData3);

    //Filtering by country
    var searchData4 = searchData3.filter(data => data.country === inputCountryValue);
    console.log(searchData4);
    if (searchData4.length > 0) {
        searchData4 = searchData4;
    } else {
        searchData4 = searchData3;
    }
    console.log(searchData4);

    //Filtinering by shape
    var searchData5 = searchData4.filter(data => data.shape === inputShapeValue);
    console.log(searchData5);
    if (searchData5.length > 0) {
        searchData5 = searchData5;
    } else {
        searchData5 = searchData4;
    }
    console.log(searchData4);

    // Loops through the filtered data
    searchData5.forEach((ufoFilteredFinder) => {
        // console.log(ufoFilteredFinder);
        var filterRow = tbody.append("tr");
    
        Object.entries(ufoFilteredFinder).forEach(([key, value]) => {
            // console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});

