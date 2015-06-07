Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}

function checkPassStrength(pass) {
    var score = scorePassword(pass);
    if (pass.length < 8) return "";
    if (score > 70)
        return "strong";
    if (score > 50)
        return "good";
    if (score >= 20)
        return "weak";
    return "";
}

$(document).ready(function () {

    $("#passwordsignup").on("keypress keyup keydown", function() {
        $("#strengthCheck").css('display', 'inline');
        var pass = $(this).val();
        $("#strength_human").text(checkPassStrength(pass));
        $("#strength_score").text(scorePassword(pass));
    });

    $('#signup-button').on('click', function (event) {

        //alert('signup button has been pressed');
        event.preventDefault();
        var user = new Parse.User();
        var wePass = true;

        var username =  $("#usernamesignup").val();
        var email = $("#emailsignup").val();
        var pass = $("#passwordsignup").val();
        var passconfirm = $("#passwordsignup_confirm").val();

        user.set("username", username);
        user.set("email", email);
        user.set("password", pass);
        var passMatch = (pass == passconfirm);

        if(!passMatch){
            alert("Error: Your passwords do not match!");
            wePass = false;
        }

        console.log(pass.length);
        if(pass.length < 8){
            alert("Error: Your passwords is not long enough! Minimum is 8 characters!");
            wePass = false;
        }

        if(wePass){
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
    });

});