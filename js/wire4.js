Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

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
        var q_string = window.location.search;
        if (q_string.substring(0, 1) == '?') {
            q_string = q_string.substring(1);
        }
        var Coin = Parse.Object.extend("Coin");
        var query = new Parse.Query(Coin);
        query.equalTo("objectId", q_string);
        query.first({
            success: function(coin) {
                coin.set("purchasedAt", new Date(document.getElementById("editpurchasedate").value));
                coin.set("quantity", Number(document.getElementById("editquantity").value));
                coin.set("premium", Number(document.getElementById("editpremium").value));
                coin.save();
		var metal = document.getElementById("displaymetal").innerHTML;
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

var q_string = window.location.search;
if (q_string.substring(0, 1) == '?') {
    q_string = q_string.substring(1);
  }

var user = Parse.User.current();
var Coin = Parse.Object.extend("Coin");
var query = new Parse.Query(Coin);
var coin = new Coin();

query.get(q_string, {
    success: function (coin) {
        // The object was retrieved successfully.

        var metal = coin.get("metal");
        var name = coin.get("name");
        var purchasedAt = coin.get("purchasedAt");
        var quantity = coin.get("quantity");
        var premium = coin.get("premium");
        var percent = coin.get("percent");
        var grams = coin.get("grams"); //weight per unit

	var img = "images/" + name + ".jpg";
	$(".coin_img")[0].setAttribute("src", img);
        $("#displaymetal").text(metal);
        $("#displayname").text(name);
        var date = purchasedAt.getDate() + 1;
        var month = purchasedAt.getMonth() + 1;
        var year = purchasedAt.getFullYear();
        	if(month < 10)
        	{
        		month = "0" + Number(month);
        	}
        	if(date < 10)
        	{
        		date = "0" + Number(date);
        	}
        $("#editpurchasedate").val(year + "-" + month + "-" + date);
        $("#editquantity").val(quantity);
        $("#editpremium").val(premium.toFixed(2));
        $("#displayweightperunit").text(grams);
	$("#metalpercent").text(metal + " %");
        $("#displaypercent").text(percent);

        var goldperunit = Math.round((grams * percent) * 10000) / 10000;
        var totalgold = Math.round((goldperunit * quantity) * 10000) / 10000;
        var ozt = Math.round((goldperunit / (31.1034768)) * 10000) / 10000;
        var totalozt = Math.round((ozt * quantity) * 10000) / 10000;

	$("#metalozt").text(metal + " ozt/u");
        $("#displayozt").text(ozt.toPrecision(3));
        $("#displaytotalozt").text(totalozt.toPrecision(3));
	$("#unitgrams").text(metal + " g/u");
        $("#displaygoldperunit").text(goldperunit.toPrecision(4));

        var spot_price;
        var json_obj_daily;
        if(metal == "Gold") {
            try{
                json_obj_daily = Get("https://www.quandl.com/api/v1/datasets/LBMA/GOLD.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",1);
                localStorage.setItem("lastGoldDataONEMONTH", JSON.stringify(json_obj_daily));
            }
            catch(err){
                json_obj_daily = JSON.parse(localStorage.getItem("lastGoldDataONEMONTH"));
            }
            
        }
        else if(name == "Silver") {
                try{
                    json_obj_daily = Get("https://www.quandl.com/api/v1/datasets/OFDP/SILVER_5.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",1);
                    localStorage.setItem("lastSilverDataONEMONTH", JSON.stringify(json_obj_daily));
                }
                catch(err){
                    json_obj_daily = JSON.parse(localStorage.getItem("lastSilverDataONEMONTH"));
                }
            
        }
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
















