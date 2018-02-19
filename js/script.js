var today = new Date();

console.log(today);

var currentHour = today.getHours();
console.log(currentHour);



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

