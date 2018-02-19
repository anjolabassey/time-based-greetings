var today = new Date(); //get the current date

console.log(today);

var currentHour = today.getHours(); //getting the current hour from the date
console.log(currentHour);


// Logic for showing greeting based on the time
if (currentHour >= 16) {
	document.getElementById("greet").innerHTML = "Good evening";	
}

else if (currentHour >= 12) {
	document.getElementById('greet').innerHTML = "Good Afternoon";
	
}

else if (currentHour > 0 ) {
	document.getElementById("greet").innerHTML = "Good Morning";
}

else {
	document.getElementById("greet").innerHTML = "Welcome";
}

