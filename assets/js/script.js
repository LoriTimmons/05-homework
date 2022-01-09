$(document).ready(function () {
  const hoursBlocks = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let body = document.body;
  // grabbing the El where the date goes.
  const currentDay = document.getElementById("currentDay");
  console.log(currentDay);
  console.log(moment().format("dddd, MMMM Do"));

  // hour format
  const currentHour = (textContent = moment().format("hh:mm A"));
  console.log("hour", currentHour);

  // Current Day populating in header format
  currentDay.textContent = moment().format("dddd, MMMM Do");

  function displayHour(hour) {
    if (hour > 12) {
      return hour - 12 + "PM";
    } else if (hour === 12) {
      return "12PM";
    } else {
      return hour + "AM";
    }
  }
  console.log("hour f", displayHour());

  // populate time blocks
  function addRow(hour) {
    let row = document.createElement("div");
    row.setAttribute("class", "row time-block");
    row.setAttribute("id", `hour-${hour}`);

    let div = document.createElement("div");
    div.setAttribute("class", "col-md-1 hour");
    div.setAttribute("id", `hour-${hour}-label`);
    div.textContent = displayHour(hour);;

    let text = document.createElement("textarea");
    text.setAttribute("class", "col-md-10 description past");
    text.setAttribute("id", `text-${hour}`);
    if (localStorage.getItem(hour)){
        text.textContent = localStorage.getItem(hour)
    }

    // add functionality to change classes for past / present / future

    // let icon = document.createElement("i");
    // icon.setAttribute("class", "fas fa-save");

    body.appendChild(row);

    row.appendChild(div);
    row.appendChild(text);
    // row.appendChild(saveBtn);
    // saveBtn.appendChild(icon);
  }
  for (let i = 0; i < hoursBlocks.length; i++) {
    addRow(hoursBlocks[i]);
  }
});
