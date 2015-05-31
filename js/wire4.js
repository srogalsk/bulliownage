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
    var invalid = isNaN(quantity) || quantity < 1 || isNaN(premium) || premium < 0;
    document.getElementById("displaygoldperunit").innerHTML = invalid? "N/A" : unitgoldgrams;
    document.getElementById("displayozt").innerHTML = invalid? "N/A" : unitgoldozt;
    document.getElementById("displaytotalozt").innerHTML = invalid? "N/A" : totalgoldozt;
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
                window.location = "wire3.html";
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
        console.log("query success");

        var metal = coin.get("metal");
        var name = coin.get("name");
        var purchasedAt = coin.get("purchasedAt");
        var quantity = coin.get("quantity");
        var premium = coin.get("premium");
        var percent = coin.get("percent");
        var grams = coin.get("grams"); //weight per unit


        $("#displaymetal").text(metal);
        $("#displayname").text(name);
        var date = purchasedAt.getDate();
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
        $("#displaypercent").text(percent);

        var goldperunit = Math.round((grams * percent) * 10000) / 10000;
        var totalgold = Math.round((goldperunit * quantity) * 10000) / 10000;
        var ozt = Math.round((goldperunit / (31.1034768)) * 10000) / 10000;
        var totalozt = Math.round((ozt * quantity) * 10000) / 10000;

        $("#displayozt").text(ozt.toPrecision(3));
        $("#displaytotalozt").text(totalozt.toPrecision(3));
        $("#displaygoldperunit").text(goldperunit.toPrecision(4));

        /* TODO: unit price = ozt*spot price + premium
         var unitprice = ozt*
         var totalprice = unitprice*quantity.toFixed(2);
         $("#displayunitprice").text(unitprice);
         $("#displaytotalprice").text(totalprice);
         */

        invalid();
        table = document.addEventListener("keyup", invalid);
    },
    error: function (object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
    }
});
