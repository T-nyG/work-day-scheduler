$(document).ready(function() {
    var currentDay = moment().format("dddd MMM Do YYYY");
    $("#currentDay").text("Plan for today's date: " + currentDay);

    var currentTime = moment().format("hh");
    console.log(currentTime);
    var timeBlocks = $(".row.time-block");
    console.log(timeBlocks.length);
    function setWorkDay() {
        for (var i = 0; i < timeBlocks.length; i++) {
            var each = $(timeBlocks[i]);
            var timeAttr = each.attr("time");
            if (currentTime < timeAttr) {
                timeBlocks.attr("class", past);
            }
            else if (currentTime === timeAttr) {
                timeBlocks.attr("class", present);
            }
            else if (currentTime > timeAttr) {
                timeBlocks.attr("class", future);
            }
    }
}

    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        var savedPlans = $(this).prevAll(".description").val();
        console.log(savedPlans);
        localStorage.setItem("event", JSON.stringify(savedPlans));
        var getPlans = localStorage.getItem("event");
        console.log(getPlans);
        







        // var savedPlans = $(this).prevAll(".description").val();
        // console.log(savedPlans);
        // localStorage.setItem("event", JSON.stringify(savedPlans));
        // $(".description").text(savedPlans);
        // var getPlans = localStorage.getItem(savedPlans)

    })

    setWorkDay();




})
      
    // m =  moment();
    // console.log(m.toString());
    // console.log(m.format("dddd MMM Do YYYY"));
    // console.log(m.format("[Plan for today's date: ]dddd MMM Do YYYY"));
    // console.log(m.format("LL"));
    // console.log