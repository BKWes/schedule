// append timeblock elements to div with class container

// want the ability to add events to planner

// on startup: current day is displayed at the top -- moment.js

// day is broken up in hours and can be seen upon scrolling
// each timeblock is color coded for past, present, and future

// when i click on timeblock, i can add an event and save
// when an event is created it is saved to localStorage

// var now = moment();
// console.log(now);

// set timeblock variables
var hour9 = document.getElementById('hr-9');
var hour10 = document.getElementById('hr-10');
var hour11 = document.getElementById('hr-11');
var hour12 = document.getElementById('hr-12');
var hour1 = document.getElementById('hr-1');
var hour2 = document.getElementById('hr-2');
var hour3 = document.getElementById('hr-3');
var hour4 = document.getElementById('hr-4');
var hour5 = document.getElementById('hr-5');


// get localStorage input based on ID
hour9.innerHTML = localStorage.getItem('hr-9');
hour10.innerHTML = localStorage.getItem('hr-10');
hour11.innerHTML = localStorage.getItem('hr-11');
hour12.innerHTML = localStorage.getItem('hr-12');
hour1.innerHTML = localStorage.getItem('hr-1');
hour2.innerHTML = localStorage.getItem('hr-2');
hour3.innerHTML = localStorage.getItem('hr-3');
hour4.innerHTML = localStorage.getItem('hr-4');
hour5.innerHTML = localStorage.getItem('hr-5');
// hour input is not persisting
// when i refresh the saved items in local storage are cleared from page they persist inside of localStorage but the html is clear



// get the current time (need format to be DAY OF WEEK-MM-DD-YYYY)
$(document).ready(function() {
  
  // display date in header
  var currentDay = moment().format('LLLL');
  $('#currentDay').text(currentDay);

  var currentTime = new Date();
  var currentHour = currentTime.getHours();

  // add classes to time blocks for past, present, future for color coordination
  $('textarea').each(function (i) { // get textarea elements and apply this function to each 
    // offset i by 9 for time slots
    var hour = i + 9;
    
    if (hour < currentHour) {
      $(this).addClass('past');
      localStorage.getItem('textarea');
    }
    else if (hour === currentHour) {
      $(this).addClass('present');
      localStorage.getItem('textarea');
    } 
    else {
      $(this).addClass('future');
      localStorage.getItem('textarea');
    }
  })


  $('.saveBtn').on('click', function() {
    var timeBlock = $(this).siblings('textarea'); // select the textarea on the same time block as the save btn that was clicked
    var hourText = timeBlock.val();
    var time = timeBlock.attr('id');
    JSON.stringify(localStorage.setItem(time, hourText)); // set id first 
    // console.log(hourText, time)

  });

});