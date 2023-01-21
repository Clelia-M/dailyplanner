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
    var $timeblock = $("<div>", {class: "time-block"});

    
}