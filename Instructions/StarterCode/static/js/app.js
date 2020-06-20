//Complete LEVEL1
// from data.js
var tableData = data;
console.log(tableData);

// CODE BELOW:

//Ref table body
var tbody = d3.select("tbody");
console.log(tbody);

//Create loop for UFOSightung
tableData.forEach(function(ufoSighting) {
console.log(ufoSighting);
// D3 to append tr for UFOSighting
var row = tbody.append("tr");
});

// d3 object.entries
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    // append cell to row for each UFO sighting
    var cell = row.append("td");
    //d3 update cell text
    cell.text(value);
    })
})


//BIG ARROW Level 1
// from data.js
const tableData = data;
console.log(tableData);

// Ref table body
const tbody = d3.select("tbody");
//Loop data and console.log
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
});

// Refactor method
tableData.forEach((ufoSighting) => {
    const row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      const cell = row.append("td");
      cell.text(value);
    });
  });
 /*
 // Select button
 const button = d3.select("#filter-btn");
 // Select form
 const form = d3.select("#form");
 // event handers
 button.on("click", runEnter);
 form.on("submit",runEnter);
 // Complete the event handler function
 function runEnter() {
 // Prevent page refresh
 d3.event.preventDefault();
 // Input element selection and HTML node
 const inputElement = d3.select("#datetime");
 // value property  o fthe input element
 const inputValue = inputElement.property("value");
 console.log(inputValue);
 const filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
 console.log(filteredData);
 };
 */
