// Initialise moment.js
moment().format();

// Get the current day and display it at the top of the page
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDay);

// Create an array to hold the standard business hours (9AM to 5PM)
var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (var i = 0; i < businessHours.length; i++) {
    var hour = businessHours[i];
    var hourIn12Format = moment(hour, "hh A").format("hh A");
    businessHours[i] = hourIn12Format;
}

// Loop trough the business hours and create a timeblock for each of them
for (var i = 0; i < businessHours.length; i++) {
    var $timeblock = $("<div>", { class: "time-block" });

    // Create an hour container for each hour
    var $hour = $("<div>", { class: "hour" });
    $hour.html(businessHours[i]);
    $timeblock.append($hour);

    // Add the timeblock to the container
    $(".container").append($timeblock);

    // Add a textarea to each timeblock
    var $eventTextarea = $("<textarea>", {class: "description"});
    $timeblock.append($eventTextarea);

    // Retrieve the event from local storage and set the textarea value
    var time = businessHours[i];
    $eventTextarea.val(localStorage.getItem(time));

    // Add a save button to each timeblock
    var $saveButton = $("<button>", {class: "saveBtn" }).html("<i class='fas fa-save' title='Save Event'></i>");
    $timeblock.append($saveButton);

    // Add an event listener to the save button
    $saveButton.on("click", function () {

        // Get the input value
        var inputValue = $(this).siblings("description").val();
        // set the textarea value to the input value
        $(this).siblings("description").val(inputValue);

        // Get the time of the timeblock
        var time = $(this).siblings(".hour").text();

    })
}