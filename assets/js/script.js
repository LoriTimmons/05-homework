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

  function hourDisplay(time) {
    if (time > 12) {
      return time - 12 + "PM";
    } else if (time === 12) {
      return "12PM";
    } else {
      return time + "AM";
    }
  }
  console.log("time f", hourDisplay());

  // populate time blocks
  function addRow(time) {
    let row = document.createElement("div");
    row.setAttribute("class", "row time-block");
    row.setAttribute("id", `time-${time}`);

    let div = document.createElement("div");
    div.setAttribute("class", "col-md-1 time");
    div.setAttribute("id", `time-${time}-label`);
    div.textContent = hourDisplay(time);;

    let text = document.createElement("textarea");
    text.setAttribute("class", "col-md-10 description past");
    text.setAttribute("id", `text-${time}`);
    if (localStorage.getItem(time)){
        text.textContent = localStorage.getItem(time)
    }

    if (time === currentHour) {
      text.classList.remove("past")
      text.classList.add("present");
  } else if (time > currentHour) {
      text.classList.remove("past", "present")
      text.classList.add("future");
  }

  // add button
  let saveBtn = document.createElement("button");
  saveBtn.setAttribute("class", "saveBtn btn col-md-1");
  saveBtn.setAttribute('id', `btn-${time}`);
  saveBtn.addEventListener('click', ()=>{
  const schedule = document.querySelector(`#text-${time}`).value;
  console.log(schedule);
  localStorage.setItem(time, schedule);
  })

    let icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-save");

    body.appendChild(row);

    row.appendChild(div);
    row.appendChild(text);
    row.appendChild(saveBtn);
    saveBtn.appendChild(icon);
  }
  for (let i = 0; i < hoursBlocks.length; i++) {
    addRow(hoursBlocks[i]);
  }
});
