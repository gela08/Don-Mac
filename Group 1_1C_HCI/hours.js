$(document).ready(function() {
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var checkTime = function() {
    var now = new Date();
    var today = weekday[now.getDay()];
    var timeDiv = document.getElementById('timeDiv');
    var dayOfWeek = now.getDay();
    var hour = now.getHours();
    var minutes = now.getMinutes();

    // Add AM or PM
    var suffix = hour >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    if (hour == 0) {
      hour = 12; // Midnight case
    } else if (hour > 12) {
      hour -= 12;
    }

    // Add leading zero to one-digit minutes
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    var open = false;
    if ((dayOfWeek == 0 || dayOfWeek == 6) && (now.getHours() >= 13 && now.getHours() <= 23)) {
      open = true;
    } else if ((dayOfWeek >= 1 && dayOfWeek <= 5) && (now.getHours() >= 8 && now.getHours() < 17)) {
      open = true;
    }

    if (open) {
      timeDiv.innerHTML = `It's ${today} ${hour}:${minutes} ${suffix} - we're open!`;
      timeDiv.className = 'open';
    } else {
      timeDiv.innerHTML = `It's ${today} ${hour}:${minutes} ${suffix} - we're closed!`;
      timeDiv.className = 'closed';
    }
  };

  var now = new Date();
  var currentDay = weekday[now.getDay()];
  var currentDayID = "#" + currentDay;
  $(currentDayID).toggleClass("today");

  setInterval(checkTime, 1000);
  checkTime();
});
