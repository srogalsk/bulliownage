/*------ POPULATE DATA ------*/
var json_obj_daily=Get("https://www.quandl.com/api/v1/datasets/LBMA/GOLD.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",1);
// Collect Critical Data points
var recentVal=json_obj_daily.data[0][1];
var recentVal2=json_obj_daily.data[1][1];
var datalen=json_obj_daily.data.length;
var oldestVal=json_obj_daily.data[datalen-1][1];

// Calculate the 1D percentage change 
var oneDayChange=(100*((recentVal-recentVal2)/recentVal2));
// Round two digits
oneDayChange=Number(Math.round(oneDayChange+'e'+2)+'e-'+2);

// Calculate the overall change over the graph's timespan
var overallChange=(100*((recentVal-oldestVal)/oldestVal));
// Round two digits
overallChange=Number(Math.round(overallChange+'e'+2)+'e-'+2);

// Calculate sign extension and add to html
var sign1, sign2;
sign1 = (oneDayChange < 0 ? "" : "+");
sign2 = (overallChange < 0 ? "" : "+");
var ODC = document.getElementById("oneDayChange");
ODC.className = (oneDayChange < 0 ? "neg-change" : "pos-change");
ODC.innerHTML = sign1+oneDayChange+"%";
var OC = document.getElementById("overallChange");
OC.className = (overallChange < 0 ? "neg-change" : "pos-change");
OC.innerHTML = sign2+overallChange+"%";

// get Change data
var change = json_obj_daily.data[0][1] - json_obj_daily.data[1][1];
change = Number(Math.round(change+'e'+2)+'e-'+2);
var sign3 = (change < 0 ? "" : "+");
var CA = document.getElementById("changeAmount");
CA.className = (changeAmount < 0 ? "neg-change" : "pos-change");
CA.innerHTML=sign3 + change;

// Fill bid and asking prices
function getData() {
    return $.ajax({
        type: "GET",
        dataType: 'text',
        url: "https://cse134b.herokuapp.com/jm",
        crossDomain : true,
        xhrFields: {
            withCredentials: false
        }
    });
}
function handleData( csvdata ) {
    var bidAskVals = [];
    var jsonAB = eval(csvdata);
    // 0 for gold, 1 for silver, 2 for plat
    document.getElementById("bidVal").innerHTML = jsonAB[0].bid;
    document.getElementById("askVal").innerHTML = jsonAB[0].ask;
    return bidAskVals;
    
}
getData().done(handleData);

// Search Bar Functionality
$('#search').keyup(function() {
    var table = document.getElementById("gold_table");
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    for (var i = 1 ; i < table.rows.length; i++){
        var coin = table.rows[i].firstChild.nextSibling.innerHTML.toLowerCase();
        if (i > 0 && coin.includes(val)){
            table.rows[i].style.display = "";
        }
        else {
            table.rows[i].style.display = "none";
        }
    }
});

/*------ PARSE STUFF -----*/
Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

var user = Parse.User.current();
var table = document.getElementById("gold_table");

var Coin = Parse.Object.extend("Coin");
var query = new Parse.Query(Coin);
query.equalTo("owner", user.id);
query.equalTo("metal", "Gold");
var coins = new Coin();
var totalVal = 0;

query.find({
  success: function(coins) {
    alert("Successfully retrieved " + coins.length + " coins");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i];

      var name = coin.get("name");
      var quantity = coin.get("quantity");
      var weight = coin.get("grams");
      var percent = coin.get("percent");

      var row = table.insertRow(i+1);
      row.setAttribute("id", coin.id);
      row.setAttribute("class", "clickable");
      var cell0 = row.insertCell(0);
      cell0.setAttribute("class", "stack_img_col");
      cell0.innerHTML = "<div class='coin_mini'></div>"
      var cell1 = row.insertCell(1);
      cell1.innerHTML = name;
      var cell2 = row.insertCell(2);
      cell2.innerHTML = quantity;
      var cell3 = row.insertCell(3);
      cell3.innerHTML = weight;
      var cell4 = row.insertCell(4);
      cell4.innerHTML = percent;
      var cell5 = row.insertCell(5);

      /* TODO: calculate total value
      right now 1000 is just a placeholder
      */
      var price = recentVal * quantity * weight;
      cell5.innerHTML = Number(Math.round(price+'e'+2)+'e-'+2);
      totalVal += Number(Math.round(price+'e'+2)+'e-'+2);
      document.getElementById("total-dollars").innerHTML = "$ "+ Number(Math.round(totalVal+'e'+2)+'e-'+2);
      //console.log(name);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }

});



