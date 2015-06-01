    /**
 * Created by gevorg on 5/23/15.
 */

Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

$(document).ready(function () {

    $('#signup-button').on('click', function (event) {
        //alert('signup button has been pressed');
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
                console.log("Error: " + error.code + " " + error.message);
            }
        });
    });

});