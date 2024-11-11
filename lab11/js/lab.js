//Author: Hailey Kafer
//Date: 2024

// Function to sort string
function sortString(str) {
    return str.split('').sort().join('');
}

// Add event listener
$("#submit").click(function() {
    // Get value from input
    console.log($('#user-name').val());
    let userName = $('#user-name').val();
    
    // Modify Username
    let userNameSorted = sortString(userName);
    
    // New div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

console.log("Button clicked!");
