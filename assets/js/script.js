// Initialise moment.js
moment().format();

// Get the current day and display it at the top of the page
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDay);