/**
 * Created by gevorg on 5/23/15.
 */

Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

$(document).ready(function () {

    $('#signup-button').on('click', function () {
        alert('signup button has been pressed');
        event.preventDefault();
        var user = new Parse.User();

        var username =  $("#usernamesignup").val();
        var email = $("#emailsignup").val();
        var pass = $("#passwordsignup").val();

        user.set("username", username);
        user.set("email", email);
        user.set("password", pass);



        user.signUp(null, {
            success: function (user) {
                // Sign up successful!
                console.log("Sign up worked");
                //Create a new personalized private group
            },
            error: function (user, error) {
                // Display error message
                console.log("Error: " + error.code + " " + error.message);
            }
        });
    });

});