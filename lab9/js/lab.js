/*
   Author: Hailey Kafer
   Date: 2023
*/

// add buttons to each section

$("#challenge").append("<button id='button-challenge'>make special</button>");

$("#problems").append("<button id='problem-button'>click me!</button>");

$("#results").append("<button id='results-button'>press me!</button>");

// add a click listener to each button

$("body").on("click", "buton", function(){
    $(this).parent().toggleClass("special");
});