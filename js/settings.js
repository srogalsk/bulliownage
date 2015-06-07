Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
                "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

    /* Display welcome message */
    function getUserName(){
        user.fetch().then(function(fetchedUser){
            var name = fetchedUser.getUsername();
            document.getElementById("welcome").innerHTML = "Welcome, "+name;
            document.getElementById("userName").innerHTML = name;
            //console.log(name);
        }, function(error){
            alert("User is not logged in.");
        });
    }

    var user = Parse.User.current();
    //check if logged in
    if (user == null) {
	    window.location = "login.html";
    }

    function logout(){
        Parse.User.logOut();
        window.location = "index.html";
    }

    //Displays text and buttons relevant to color changing and hides others
    function changeColor(){
        var button1 = document.getElementById("save");
        var button2 = document.getElementById("cancel");
        var button3 = document.getElementById("remove");
        var button4 = document.getElementById("cancel2");
        var welcome = document.getElementById("welcome");
        var userpass = document.getElementById("userpass");
        var emailChange = document.getElementById("emailChange");
        var color = document.getElementById("colorpick");
        var color_form = document.getElementById("color-form");
        if(button1.style.display == ""){
            welcome.style.display="none";
            button1.style.display="none";
            button2.style.display="none";
            button3.style.display="none";
            emailChange.style.display="none";
            color.style.display="block";
            color_form.style.display="block";
            userpass.style.display="none";
            oldpass.style.display="none";
            var span = document.getElementById("buttonspan");
            span.style.marginTop="180px";
            form.style.display="block";
            button4.style.display="block";
            document.getElementById("passheader").innerHTML="Pick your color below!";
            document.getElementById("newpasslabel").style.display="none";
            document.getElementById("newpass").style.display="none";
            document.getElementById("newpassconfirmlabel").style.display="none";
            document.getElementById("newpassconfirm").style.display="none";
        }
     else{
        //set color to default
        if(document.getElementById("defaultcolor").checked)
            user.set("color", "#1D1D1D");
        //use color chosen in colorpick
        else
            user.set("color", document.getElementById("colorpick").value);
        user.save();
        alert("Color Change Successful");
        window.location = "settings.html";
     }
    }

  //account deletion
  function confirm() {
    var button1 = document.getElementById("save");
    var button2 = document.getElementById("cancel");
    var button3 = document.getElementById("remove");
    var button4 = document.getElementById("cancel2");
    var welcome = document.getElementById("welcome");
    var emailChange = document.getElementById("emailChange");
    var color = document.getElementById("colorbutton");
    var colorpick = document.getElementById("colorpicker");
    var color_form = document.getElementById("color-form");
    //display forms for account deletion and hide other elements
    if(button1.style.display == ""){
        welcome.style.display="none";
        button1.style.display="none";
        button2.style.display="none";
        emailChange.style.display="none";
        color.style.display="none";
        color_form.style.display="none";
        var span = document.getElementById("buttonspan");
        span.style.marginTop="180px";
        form.style.display="block";
        button4.style.display="block";
        document.getElementById("passheader").innerHTML ="Sorry to see you go! <br/> Please confirm your account details.";
        document.getElementById("newpasslabel").style.display="none";
        document.getElementById("newpass").style.display="none";
        document.getElementById("newpassconfirmlabel").style.display="none";
        document.getElementById("newpassconfirm").style.display="none";
    }
    else{
        var uname = document.getElementById("username");
        var oldpass = document.getElementById("oldpass");
        var username = uname.value;
        var password = oldpass.value;

        Parse.User.logIn(username, password, {
            success: function(user) {
                    destroyAccount();
                    alert("Account deleted successfully");
                    window.location = "index.html";
                 },
            error: function(user, error) {
                // Login failed!
                alert("Error: Your Username or Password is Incorrect.");

            }
        });
    }

    }

     function changeEmail(){

        var button1 = document.getElementById("save");
        var button2 = document.getElementById("cancel");
        var button3 = document.getElementById("remove");
        var button4 = document.getElementById("cancel2");
        var welcome = document.getElementById("welcome");
        var emailFeatures = document.getElementById("emailFeatures");
        var color = document.getElementById("colorbutton");
        var color_form = document.getElementById("color-form");
        var passwordFeatures = document.getElementById("passwordFeatures");
        var passheader = document.getElementById("passheader");
        passheader.innerHTML = "Email Management";
        //display form for email change and hide others
        if(button1.style.display == ""){
            button1.style.display="none";
            button3.style.display="none";
            welcome.style.display="none";
            button2.style.display="none";
            color.style.display="none";
            color_form.style.display="none";
            var span = document.getElementById("buttonspan");
            span.style.marginTop="180px";
            var form = document.getElementById("form");
            button4.style.display="block";
            emailFeatures.style.display="block";
            passwordFeatures.style.display="none";
            form.style.display="block";

        }
        else{
            var uname = document.getElementById("username");
            var pass = document.getElementById("oldpass");
           var newemail = document.getElementById("newemail");
           var newemailconfirm = document.getElementById("newemailconfirm");
           var newpassconfirm = document.getElementById("newpassconfirm");

            var username = uname.value;
            var password = oldpass.value;

            //update email address in parse
            if(username.toLowerCase() == document.getElementById("userName").innerHTML.toLowerCase()){
                if(newemail.value == newemailconfirm.value){
                    Parse.User.logIn(username, password, {
                        success: function(user) {
                                user.set("email", newemail.value);
                                user.save();
                                alert("Email Change Successful");
                                window.location = "settings.html";                             },
                        error: function(user, error) {
                            // Login failed!
                            alert("Error: Your Username or Password is Incorrect.");

                        }
                    });
                }
                else{
                    alert("Your Passwords do not match.");
                }
            }
            else{
                alert("Your username is incorrect.");
            }
        }

    }


    function changePassword(){

        var button1 = document.getElementById("save");
        var button2 = document.getElementById("cancel");
        var button3 = document.getElementById("remove");
        var button4 = document.getElementById("cancel2");
        var welcome = document.getElementById("welcome");
        var emailChange = document.getElementById("emailChange");
        var color = document.getElementById("colorbutton");
        var color_form = document.getElementById("color-form");
        //display forms for password change and hide other elements
        if(button1.style.display == ""){
            button1.style.display="none";
            button3.style.display="none";
            welcome.style.display="none";
            color.style.display="none";
            color_form.style.display="none";
            var span = document.getElementById("buttonspan");
            span.style.marginTop="180px";
            var form = document.getElementById("form");
            form.style.display="block";
            button4.style.display="block";
            emailChange.style.display="none";
        }
        else{
            var uname = document.getElementById("username");
           var oldpass = document.getElementById("oldpass");
           var newpass = document.getElementById("newpass");
           var newpassconfirm = document.getElementById("newpassconfirm");

            var username = uname.value;
            var password = oldpass.value;



            console.log("1: " + username);
            console.log("2: " + document.getElementById("userName").innerHTML.toLowerCase().split(' '));
            if(username.toLowerCase() == document.getElementById("userName").innerHTML.toLowerCase()){
                if(newpass.value == newpassconfirm.value){
                    //update pw in parse
                    Parse.User.logIn(username, password, {
                        success: function(user) {
                                user.set("password", newpass.value);
                                user.save();
                                alert("Password Change Successful");
                                window.location = "settings.html";                             },
                        error: function(user, error) {
                            // Login failed!
                            alert("Error: Your Username or Password is Incorrect.");

                        }
                    });
                }
                else{
                    alert("Your Passwords do not match.");
                }
            }
            else{
                alert("Your username is incorrect.");
            }
        }

    }

    function destroyAccount(){
        var user = Parse.User.current();
        var Coin = Parse.Object.extend("Coin");
        var query = new Parse.Query(Coin);
        query.equalTo("owner", user.id);
        var coins = new Coin();
        query.find({
            success: function(coins) {
                Parse.Object.destroyAll(coins, {success: function() {}, error: function() {}, });
                window.location = "index.html";
            },
            error: function(coins, error) {
                alert("Failed to destory");
            }
        });
        user.destroy();
    }

