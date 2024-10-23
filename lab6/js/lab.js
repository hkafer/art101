// Lab 6 - JavaScript Arrays and Objects
// Author: Hailey Kafer
// Date: October 22, 2024

// Define Variables
myTransport = ["Chevy Sonic", "Bicycle", "Airplane", "Boat", "Ride From Friend", "Bus"];

// Create an object for my main ride
myMainRide = {
  make : "Chevy",
  model : "Sonic",
  color : "Dark Grey",
  year : "2012",
  age : function() {
    return 2024 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre");

