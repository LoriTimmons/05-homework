// const rightNow = new Date();
// $("#currentDay").text(rightNow.toDateString());


console.log("connect");
// date!

const currentDay = document.getElementById("currentDay");
console.log(currentDay);
console.log(moment().format("dddd, MMMM Do"));

// Current Day 
currentDay.textContent=moment().format("dddd, MMMM Do");

// if statement for P/P/F color blocks. IF Else statements. Give it correct classes
// moment hour - how to get the moment hour 
// how do we get the time slot hours - give text area ide of 9 to last col ex "id=9" (might give the ids military hour) 
// moment hour rtns military time 