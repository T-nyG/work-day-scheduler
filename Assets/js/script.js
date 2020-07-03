var myDay = localStorage.getItem("myDay")
  ? JSON.parse(localStorage.getItem("myDay"))
  : [
      { time: "9AM", event: "" },
      { time: "10AM", event: "" },
      { time: "11AM", event: "" },
      { time: "12PM", event: "" },
      { time: "1PM", event: "" },
      { time: "2PM", event: "" },
      { time: "3PM", event: "" },
      { time: "4PM", event: "" },
      { time: "5PM", event: "" },
    ];

//Display today's date
var currentDate = moment().format("dddd MMM Do YYYY");
$("#currentDay").text(currentDate);
// var day = moment().format("dddd MMM Do YYYY");
// moment().format("LL");
var hour = moment().format("HH");

//Start schedule
for (let i = 0; i < myDay.length; i++) {
  //Add rows to schedule
  var row = $("<div>");
  row.addClass("time-block row");
  row.attr("id", myDay[i].time);
  $("#fullSchedule").append(row);
  //Add time to rows
  var newTime = $("<div>");
  newTime.text(myDay[i].time);
  newTime.addClass("col-xs-1 col-sm-1 col-md-1 col-lg-1 hour");
  row.append(newTime);
  //Add event(s)
  var newEvent = $("<textarea>");
  newEvent.val(myDay[i].event);
  //Determine color of events from current time
  newEvent.addClass(
    `col-xs-10 col-sm-10 col-md-10 col-lg-10 description ${
      i + 9 < hour ? "past" : i + 9 > hour ? "future" : "present"
    }`
  );
  newEvent.attr("data-name", myDay[i].time);
  newEvent.attr("style", "overflow-wrap:break-word;");
  row.append(newEvent);
  //Add save button
  row.append(`<button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 btn btn-primary saveBtn" type='submit'
    data-name=${i}><i class="fas fa-save"></i></button>`);
}

//Click button to save event
$(".description").on("keyup", function () {
  var inputText = this.value;
  $(".saveBtn").on("click", function () {
    event.preventDefault();
    var index = $(this).attr("data-name");
    myDay[index].event = inputText;
    localStorage.setItem("myDay", JSON.stringify(myDay));
  });
});
