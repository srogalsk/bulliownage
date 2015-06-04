/**
 * Created by gevorg on 5/23/15.
 */

Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

$(document).ready(function () {

    $("#fb-login").on('click', function () {

        window.fbAsyncInit = function () {
            Parse.FacebookUtils.init({ // this line replaces FB.init({
                appId: 860624237308675, // Facebook App ID
                status: true,  // check Facebook Login status
                cookie: true,  // enable cookies to allow Parse to access the session
                xfbml: true,  // initialize Facebook social plugins on the page
                version: 'v2.3' // point to the latest Facebook Graph API version
            });

            // Run code after the Facebook SDK is loaded.
            Parse.FacebookUtils.logIn(null, {
                success: function (user) {
                    if (!user.existed()) {
                        alert("User signed up and logged in through Facebook!");
                    } else {
                        alert("User logged in through Facebook!");
                    }
                    window.location.replace("wire2.html");
                },
                error: function (user, error) {
                    alert("User cancelled the Facebook login or did not fully authorize.");
                }
            });
        };


        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=860624237308675";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });

    $('#login-button').on('click', function (event) {

        event.preventDefault();

        var username = $("#username").val();
        var password = $("#login-password").val();


        //console.log("Username is: " + username);
        //console.log("Password is: " + password);




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
