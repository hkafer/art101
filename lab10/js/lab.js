/*
   Author: Hailey Kafer
   Date: 2023
*/

// add buttons to each section

function generateRandomText(){
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt";
    const min = 3; 
    const max = 100;
    const randLen = Math.floor(math.random() * (max - min +1)) + min;
    // Get a random starting index to slice the Lorem ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen +1));
    // Generate the random Lorem ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// Click listener for button
$("#make-convo").click(function(){

    //get new fake dialogue
    const newText = generateRandomText();
    
    //append a new div to our output div
    $('#output').append('<div class="text"><p>' + newText + '</p></div>');
}); 
