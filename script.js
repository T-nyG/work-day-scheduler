$(document).ready(function() {
    var currentDay = moment().format("dddd MMM Do YYYY");
    $("#currentDay").text("Plan for today's date: " + currentDay);

    var currentTime = moment().format("HH");
    console.log(currentTime);
    var timeBlocks = $(".row.time-block");
    console.log(timeBlocks.length);
    function setCalendar() {
        for (var i=0; i < timeBlocks.length; i++) {
            var target = $(timeBlocks[i]);
            var timeAttr = target.attr("time");
            console.log(timeAttr);
            if (currentTime < timeAttr) {
                target.find(".description").addClass("past");
            }
            else if (currentTime == timeAttr) {
                target.find(".description").addClass("present");
            }
            else {
                target.find(".description").addClass("future");
            }
    }}

    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        var parent = $(this).prevAll(".description").val();
        console.log(parent);
        localStorage.setItem("event", JSON.stringify(parent));
        $(".description").text("event");
    })

    setCalendar();




})
      
    // m =  moment();
    // console.log(m.toString());
    // console.log(m.format("dddd MMM Do YYYY"));
    // console.log(m.format("[Plan for today's date: ]dddd MMM Do YYYY"));
    // console.log(m.format("LL"));
    // console.log