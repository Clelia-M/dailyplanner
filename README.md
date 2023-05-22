# 🗒️ Daily Planner App
This is a daily planner that llows the user to schedule their events for the day and save them to their local storage. The planner displays the current day at the top of the page and standard business hours (9AM to 5PM) in the planner. 
Each time block includes a text area for the user to enter an event, a save button to save the event to their local storage and a color code that indicates wether the hour is in the past, present or future. 

This application uses Javascript for the logic and HTML and CSS for the layout and styling. 
The Javascript code uses functions and event listeners to handle user interactions and update the content on the screen. It also uses the local storage to store the events. 

It has been created by modifying a given HTML and CSS starter code and it is the challenge for week 7 of the Front-End Development bootcamp. 

## Table of Contents
- [Workflow](#workflow)
- [Link to the Application](#link-to-deployed-application)
- [Final result](#final-results)

# Workflow
1. Set up of the current day at the top of the page using Moment js method and adding it to the #currentDay id.
2. Creation fo the array to hold the standard business hours (9am to 5pm).
3. For loop that goes through the business hours array and converts the hours to 12 hour format using Moment Js method.
4. For loop that creates a time block for each hour in the business hours array. each time block includes: a div container with a class of time-block, a div with class hour displaying the hour, a text area for the event, and a save button. 
5. Creation fo the event listener on the save button that gets the input value fromt he textarea when clicked; it saves the input value to the local storage uusing the hour as the key; it creates an alert to the top of the planner that the event was save successfully.
6. For loop to set the current time and compare it to the hour in the business hours array. this allows to colore code based on present, past or future hour. 
7. Styling of each element updating the CSS starter code.

## Link to deployed Application
[Daily Planner App](https://clelia-m.github.io/dailyplanner/)

## Final Results
![Final app](https://github.com/Clelia-M/dailyplanner/blob/67688daa76d72187adacbeae4f45b82534849509/assets/img/Daily%20Planner.png)
