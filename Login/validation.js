function validateLoginForm(){
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    if (username == "") {
        alert("Please enter your username");
        return false;
    }
    if (password == "") {
        alert("Please enter your password");
        return false;
    }
}

function validateSignupForm(){
    var username = document.forms["signupForm"]["username"].value;
   
