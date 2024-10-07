"use strict";

var marathonDate = new Date("2025-02-16T07:00:00").getTime();
let milesRan;

var countdownFunction = setInterval(function () {
	var now = new Date();
	var timeLeft = marathonDate - now;

	var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	document.getElementById("clock-days").innerHTML = days;
	document.getElementById("clock-hours").innerHTML = hours;
	document.getElementById("clock-mins").innerHTML = minutes;
	document.getElementById("clock-seconds").innerHTML = seconds;

	if (timeLeft < 0) {
		clearInterval(countdownFunction);
		document.getElementById(("clock".innerHTML = "Marathon Complete!"));
	}
}, 1000);


fetch("response.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error(
				"Network response was not ok " + response.statusText
			);
		}
		return response.json();
	})
	.then((data) => {
		// Step 3: Set the total distance of runs to the variable
		milesRan = data.all_run_totals.distance;

		// Step 4: Convert meters to miles (1 mile = 1609.34 meters)
		const milesRanConverted = milesRan / 1609.34;

		// Step 5: Display the total distance in miles
		const totalDistanceElement = document.getElementById("miles-ran-total");
		totalDistanceElement.textContent = milesRanConverted.toFixed(2);
	})
	.catch((error) => {
		console.error("There was a problem with the fetch operation:", error);
	});
