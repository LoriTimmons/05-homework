const currentTime = new Date();
const timeBlocks = document.getElementsByClassName(".hour")


// grabbing the El where the date goes.
const currentDay = document.getElementById("currentDay");
console.log(currentDay);
console.log(moment().format("dddd, MMMM Do"));

// Current Day populating in header format  
currentDay.textContent=moment().format("dddd, MMMM Do");

// add classes to time slots 
function pastPresentFuture() {
    let time = document.getElementById("hour");
    var hour = $(".hour").text().trim();
    console.log("hour" , hour);

    console.log("time" , time);
    console.log("current time" , currentTime);
        //check the current hour time, and add class to past/present/future 
        if (time < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (time === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

}

// run function 
pastPresentFuture();


        
    


// // // if statement for P/P/F color blocks. IF Else statements. Give it correct classes
// // // moment hour - how to get the moment hour 
// // // how do we get the time slot hours - give text area ide of 9 to last col ex "id=9" (might give the ids military hour) 
// // // moment hour rtns military time 

