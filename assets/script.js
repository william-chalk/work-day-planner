//Display current date at top of planner
//Displays time blocks for normal business hours 9AM-5PM
//each block will be color coated to represent past(grey),present(yellow),future(green)
//When user clicks time block then they can enter an event
//When a user clicks save on the time bloack then the information is saved in localStorage
//The information persists on browser refresh

//Setting varaible to equal id in HTML
var currentDay = $("#currentDay");

//Sets var "date" to new Date(); and sets the format to be Day Month Date and HH:MM AM/PM
var displayTime = function () {
  var date = moment(new Date());
  currentDay.html(date.format("dddd, MMMM Do YYYY, h:mm a"));
};

//when the document is loaded displayTime is called and updates it every 1 milisecond
$(document).ready(function () {
  displayTime();
  setInterval(displayTime, 1000);
});

//When save button is clicked the userInput and the parents ID is set as a variable and saved in localStorage
$(".saveBtn").on("click", function () {
  var userInput = $(this).siblings(".userTask").val();
  var timeBlock = $(this).parent().attr("id");
  localStorage.setItem(timeBlock, userInput);
});

//targets userInput and gets its value from localStorage
$("#9 .userTask").val(localStorage.getItem("9"));
$("#10 .userTask").val(localStorage.getItem("10"));
$("#11 .userTask").val(localStorage.getItem("11"));
$("#12 .userTask").val(localStorage.getItem("12"));
$("#13 .userTask").val(localStorage.getItem("13"));
$("#14 .userTask").val(localStorage.getItem("14"));
$("#15 .userTask").val(localStorage.getItem("15"));
$("#16 .userTask").val(localStorage.getItem("16"));
$("#17 .userTask").val(localStorage.getItem("17"));

//each loop runs and if currentID is less than currentTime then it is Past
//if currentID is greater than currentTime then it is future
//else it is present and backround assigned accordingly
function taskAudit() {
  var currentTime = moment().hours();

  $(".time-block").each(function () {
    var currentId = $(this).attr("id");
    //past
    if (currentId < currentTime) {
      $(this).addClass("bg-secondary");
    }
    //future
    else if (currentId > currentTime) {
      $(this).addClass("bg-success");
    }
    //present
    else {
      $(this).addClass("bg-warning");
    }
  });
}

taskAudit();
