$(document).ready(function () {
    const hoursBlocks = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    let body = document.body;
      // grabbing the El where the date goes.
const currentDay = document.getElementById("currentDay");
console.log(currentDay);
console.log(moment().format("dddd, MMMM Do"));

// hour format 
const currentHour = textContent = moment().format("hh:mm");
console.log("hour" , currentHour);

// Current Day populating in header format  
currentDay.textContent=moment().format("dddd, MMMM Do");
  
// populate time blocks 
    function addRow() {
    let row = document.createElement("div");
    row.setAttribute("class", "row time-block")
    row.setAttribute("id", "hour");

    let div = document.createElement("div");
    div.setAttribute
    
    }

  });