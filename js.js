"use strict";

var marathonDate = new Date("2025-02-16T07:00:00").getTime();

var countdownFunction = setInterval (function() {
  var now = new Date();
  var timeLeft = marathonDate - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("clock-days").innerHTML = days;
  document.getElementById("clock-hours").innerHTML = hours;
  document.getElementById("clock-mins").innerHTML = minutes;
  document.getElementById("clock-seconds").innerHTML = seconds;

  if(timeLeft < 0) {
    clearInterval(countdownFunction);
    document.getElementById("clock".innerHTML = "Marathon Complete!");
  }

}, 1000);

let totalMiles = 69;
document.getElementById("miles-ran-total").innerHTML = totalMiles;

