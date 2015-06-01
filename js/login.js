/**
 * Created by gevorg on 5/23/15.
 */

Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

$(document).ready(function () {

    $('#login-button').on('click', function (event) {

        event.preventDefault();

        var username = $("#username").val();
        var password = $("#login-password").val();


        console.log("Username is: " + username);
        console.log("Password is: " + password);




        Parse.User.logIn(username, password, {
            success: function(user) {
                // Login successful!
                console.log("Login Success!");
                window.location.href = "wire2.html";

                },
            error: function(user, error) {
                // Login failed!
                alert("Error: Your Username or Password is Incorrect.");

            }
        });
    });

});