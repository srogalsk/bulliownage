Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

var user = Parse.User.current();
//check if user is logged in
if (user == null) {
	window.location = "login.html";
}

//validation check for updated fields
function invalid() {
	var quantity = Number(document.getElementById("editquantity").value);
    var premium = Number(document.getElementById("editpremium").value);
    	var percent = Number(document.getElementById("displaypercent").innerHTML);
    var unitgrams = Number(document.getElementById("displayweightperunit").innerHTML);
    var unitgoldgrams = percent * unitgrams;
    var unitgoldozt = Number(0.0321507466 * unitgoldgrams);
    var totalgoldozt = unitgoldozt * quantity;
    document.getElementById("displayozt").innerHTML = unitgoldozt.toFixed(4);
    document.getElementById("displaygoldperunit").innerHTML = unitgoldgrams.toFixed(4);
    var invalid = isNaN(quantity) || quantity < 1 || isNaN(premium) || premium < 0;
    document.getElementById("displaytotalozt").innerHTML = invalid? "N/A" : totalgoldozt.toFixed(4);
    return invalid;
}

function updateToStack() {
    if (!invalid()) {
        //get the coin object based on the query string in the url
        var q_string = window.location.search;
        if (q_string.substring(0, 1) == '?') {
            q_string = q_string.substring(1);
        }
        var Coin = Parse.Object.extend("Coin");
        var query = new Parse.Query(Coin);
        query.equalTo("objectId", q_string);
        query.first({
            //update parse fields for this coin object
            success: function(coin) {
                coin.set("purchasedAt", new Date(document.getElementById("editpurchasedate").value));
                coin.set("quantity", Number(document.getElementById("editquantity").value));
                coin.set("premium", Number(document.getElementById("editpremium").value));
                coin.save();
		var metal = document.getElementById("displaymetal").innerHTML;
		//determine which page to redirect to
		if (metal == "Gold") {
                    window.location = "wire3.html";
                } else if (metal == "Silver") {
                    window.location = "wire3b.html";
                } else if (metal == "Platinum") {
                    window.location = "wire3c.html";
                }
                alert("Bullion saved successfully");
            },
            error: function(error) {
                alert("Invalid information");
            }
        });
    } else {
        alert("Invalid information");
    }
}

/*
* determine which page to redirect to
* this could possibly be solved with a previous window function
*/
function cancel() {
	var metal = document.getElementById("displaymetal").innerHTML;
	if (metal == "Gold") {
	    window.location = "wire3.html";
	} else if (metal == "Silver") {
	    window.location = "wire3b.html";
	} else if (metal == "Platinum") {
	    window.location = "wire3c.html";
	}
}

//get object id from url query string
var q_string = window.location.search;
if (q_string.substring(0, 1) == '?') {
    q_string = q_string.substring(1);
  }
//fetch object
var Coin = Parse.Object.extend("Coin");
var query = new Parse.Query(Coin);
var coin = new Coin();

query.get(q_string, {
    success: function (coin) {
        // The object was retrieved successfully.
        //place Parse objects into variables
        var metal = coin.get("metal");
        var name = coin.get("name");
        var purchasedAt = coin.get("purchasedAt");
        var quantity = coin.get("quantity");
        var premium = coin.get("premium");
        var percent = coin.get("percent");
        var grams = coin.get("grams"); //weight per unit

	var img = "images/" + name + ".jpg"; //the image filename is of the form "Coinname.jpg"
	var img_tag = $(".def_img")[0];
	img_tag.setAttribute("src", img);
	img_tag.setAttribute("class", "coin_img");
	    //fill in the fields to display
        $("#displaymetal").text(metal);
        $("#displayname").text(name);
        var date = purchasedAt.getDate() + 1;
        var month = purchasedAt.getMonth() + 1;
        var year = purchasedAt.getFullYear();
        //display date and month with leading zero
        	if(month < 10)
        	{
        		month = "0" + Number(month);
        	}
        	if(date < 10)
        	{
        		date = "0" + Number(date);
        	}

        //fill out the fields
        $("#editpurchasedate").val(year + "-" + month + "-" + date);
        $("#editquantity").val(quantity);
        $("#editpremium").val(premium.toFixed(2));
        $("#displayweightperunit").text(grams);
	$("#metalpercent").text(metal + " %");
        $("#displaypercent").text(percent);

        //calculations for weight
        var goldperunit = Math.round((grams * percent) * 10000) / 10000;
        var totalgold = Math.round((goldperunit * quantity) * 10000) / 10000;
        var ozt = Math.round((goldperunit / (31.1034768)) * 10000) / 10000;
        var totalozt = Math.round((ozt * quantity) * 10000) / 10000;

	$("#metalozt").text(metal + " ozt/u");
        $("#displayozt").text(ozt.toPrecision(3));
        $("#displaytotalozt").text(totalozt.toPrecision(3));
	$("#unitgrams").text(metal + " g/u");
        $("#displaygoldperunit").text(goldperunit.toPrecision(4));

        /*
         * This next section calculates the price by multiplying the weight per unit (originally from db and converted
         * into proper units) by the market value or whichever metal we are looking at.  Then we add the premium
         * and multiply by quantity
         */
        var spot_price;
        var json_obj_daily;
        // if the item is gold, get the gold spot price
        if(metal == "Gold") {
            try{
                json_obj_daily = Get("https://www.quandl.com/api/v1/datasets/LBMA/GOLD.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",1);
                localStorage.setItem("lastGoldDataONEMONTH", JSON.stringify(json_obj_daily));
            }
            catch(err){
                json_obj_daily = JSON.parse(localStorage.getItem("lastGoldDataONEMONTH"));
            }
            
        }
        //if the metal is silver, get the silver spot price
        else if(name == "Silver") {
                try{
                    json_obj_daily = Get("https://www.quandl.com/api/v1/datasets/OFDP/SILVER_5.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",1);
                    localStorage.setItem("lastSilverDataONEMONTH", JSON.stringify(json_obj_daily));
                }
                catch(err){
                    json_obj_daily = JSON.parse(localStorage.getItem("lastSilverDataONEMONTH"));
                }
            
        }
        //if the metal is platinum, get the platinum spot price
        else {
                try{
                    json_obj_daily = Get("https://www.quandl.com/api/v1/datasets/LPPM/PLAT.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",1);
                    localStorage.setItem("lastPlatDataONEMONTH", JSON.stringify(json_obj_daily));
                }
                catch(err){
                    json_obj_daily = JSON.parse(localStorage.getItem("lastPlatDataONEMONTH"));
                }
            
        }

        spot_price=json_obj_daily.data[0][1];

         //price calculation
         var unitprice = ozt*spot_price + premium;
         var totalprice = unitprice*quantity;
         $("#displayunitprice").text(unitprice.toFixed(2));
         $("#displaytotalprice").text(totalprice.toFixed(2));


        invalid();
        table = document.addEventListener("keyup", invalid);
    },
    error: function (object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
    }
});
















