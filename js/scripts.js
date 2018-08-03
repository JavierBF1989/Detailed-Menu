$(document).ready(function () {
    
    //Hide Login Modal for Sign Up
    $('#signupButton').click(function () {
        $('#loginModal').modal('hide');
        $('#signupModal').modal('toggle');
    });

    
})  
