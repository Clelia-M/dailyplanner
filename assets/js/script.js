// Get the current day and display it at the top of the page (#currentDay id p html)
$("#currentDay").text(moment().format("dddd, MMM, Do"));

// Create an array to hold the standard business hours (9AM to 5PM)
var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (var i = 0; i < businessHours.length; i++) {
    var hour = businessHours[i];
    var hourIn12Format = moment(hour, "hh A").format('hh A');
    businessHours[i] = hourIn12Format;
}

// Loop through the business hours and create a timeblock for each of them
for (var i = 0; i < businessHours.length; i++) {
    var $timeblock = $("<div>", { class: "time-block" });

    // Create an hour container for each hour
    var $hour = $("<div>", { class: "hour" });
    $hour.html(businessHours[i]);
    $timeblock.append($hour);

    // Add the timeblock to the container
    $(".container").append($timeblock);

    // Add a textarea to each timeblock
    var $eventTextarea = $("<textarea>", { class: "description" });
    $timeblock.append($eventTextarea);

    // Retrieve the event from local storage and set the textarea value
    var time = businessHours[i];
    $eventTextarea.val(localStorage.getItem(time));

    // Add a save button to each timeblock
    var $saveButton = $("<button>", { class: "saveBtn" }).html("<i class='fas fa-save' title='Save Event'></i>");
    $timeblock.append($saveButton);

    // Add an event listener to the save button
    $saveButton.on("click", function () {

        // Get the input value
        var inputValue = $(this).siblings(".description").val();
        // Set the textarea value to the input value
        $(this).siblings(".description").val(inputValue);

        // Get the time of the timeblock
        var time = $(this).siblings(".hour").text();

        // Save the event in the local storage
        localStorage.setItem(time, inputValue);

        // Create a new paragraph and show the alert on the top of the planner
        var alert = $("<p>").text("Congrats, event saved successfully!");
        $(".container").prepend(alert);
    });

    // Check if the current time is past, present, or future
    var currentTime = moment().format("hh A");
    if (businessHours[i] < currentTime) {
        $timeblock.addClass("past");
    } else if (businessHours[i] === currentTime) {
        $timeblock.addClass("present");
    } else {
        $timeblock.addClass("future");
    }
};