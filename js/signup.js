Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

$(document).ready(function () {


    $("#fb-signup").on('click', function () {

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
                    alert("User cancelled the Facebook login or did not fully authorize." + error);
                }
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });


    $('#signup-button').on('click', function (event) {

        //alert('signup button has been pressed');
        event.preventDefault();
        var user = new Parse.User();

        var username =  $("#usernamesignup").val();
        var email = $("#emailsignup").val();
        var pass = $("#passwordsignup").val();
        var passconfirm = $("#passwordsignup_confirm").val();

        user.set("username", username);
        user.set("email", email);
        user.set("password", pass);
        var passMatch = (pass == passconfirm);
        if(passMatch){

            user.signUp(null, {
                success: function (user) {
                    // Sign up successful!
                    //console.log("Sign up worked");

                    var currUser = Parse.User.current();
                    var d = new Date();

                    for(var i = 1; i <= 31; i++)
                    {
                        currUser.add("goldHistory", null);
                        currUser.add("silverHistory", null);
                        currUser.add("platHistory", null);
                    }

                    currUser.set("time", 9001);

                    currUser.save(null, {
                        success: function(currUser)
                        {
                            console.log("array saved successfully");
                        },
                        error: function(error, currUser)
                        {
                            console.log("Error, array not saved successfully, " + error);
                        }
                    });

                    window.location.href = "login.html";

                },
                error: function (user, error) {
                    // Display error message
                    alert("Error: " + error.message);
                }
            });
        }
        else{
            alert("Error: Your passwords do not match!");
        }
    });

});