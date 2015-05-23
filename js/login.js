/**
 * Created by gevorg on 5/23/15.
 */

Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

$(document).ready(function () {

    $('#login-button').on('click', function () {
        alert('login button has been pressed');

        event.preventDefault();

        var username = $("#login-username");
        var password = $("#login-password");

        Parse.User.logIn(username, password, {
            success: function(user) {
                // Login successful!
                console.log("Login Worked");
                    $(".login-errors").text("Please verify email.").fadeIn(500);
            },
            error: function(user, error) {
                // Login failed!
                console.log("Error: " + error.code + " " + error.message);
            }
        });
    });

});