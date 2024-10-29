// Lab 7 - Functions
// Author: Hailey Kafer
// Date: October 22, 2024

function sortUserName () {
  var userName = window.prompt("Hello, what is your name?");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("userName =", userName);
  
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

//output
document.writeln("I fixed your name: ", 
    sortUserName(), "</br>");
