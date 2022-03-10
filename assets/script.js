// append timeblock elements to div with class container

// want the ability to add events to planner

// on startup: current day is displayed at the top -- moment.js

// day is broken up in hours and can be seen upon scrolling
// each timeblock is color coded for past, present, and future

// when i click on timeblock, i can add an event and save
// when an event is created it is saved to localStorage

// var now = moment();
// console.log(now);


var timeblock = $('.time-block');
var hour = $('.hour');
var hours = ['00:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
// get the current time (need format to be DAY OF WEEK-MM-DD-YYYY)
var currentDate = moment('MM-DD-YYYY');


function createSchedule() {
    // get current day 
    $('#currentDay').append(currentDate);
    

    for (var i=0; i<hours.length; i++) {
    var timeBlockEl = document.createElement('div')
      timeBlockEl.className = 'time-block';
      timeBlockEl.textContent = hours[i];
    $('.container').append(timeBlockEl);
    }
};