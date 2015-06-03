/*------ POPULATE Numerical Data Wire3 ------*/
// API call to Quandl
var json_obj_daily=Get("https://www.quandl.com/api/v1/datasets/LBMA/GOLD.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",1);
// Collect Critical Data points
var recentVal=json_obj_daily.data[0][1]; // most recent stock value
var recentVal2=json_obj_daily.data[1][1]; // second most recent stock value
var datalen=json_obj_daily.data.length; // number of data elements we have for the month
var oldestVal=json_obj_daily.data[datalen-1][1];  // oldest value within a month

// Calculate the 1D percentage change 
var oneDayChange=(100*((recentVal-recentVal2)/recentVal2));
// Round two digits
oneDayChange=Number(Math.round(oneDayChange+'e'+2)+'e-'+2);

// Calculate the overall change over the graph's timespan (Currently 1 month)
var overallChange=(100*((recentVal-oldestVal)/oldestVal));
// Round two digits
overallChange=Number(Math.round(overallChange+'e'+2)+'e-'+2);

// Calculate sign extension for HTML (Need to append + sign only)
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
// Requires call to external page created by another student
// This will not work if page is down!
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
// When a key is released, check the search bar for changes 
// and hide items that do not contain the substring
$('#search').keyup(function() {
    var table = document.getElementById("gold_table");
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    for (var i = 1 ; i < table.rows.length; i++){
        var coin = table.rows[i].firstChild.nextSibling.innerHTML.toLowerCase();
        if (i > 0 && coin.includes(val)){
            table.rows[i].style.display = ""; // Default hidden value
        }
        else {
            table.rows[i].style.display = "none"; // Adds hidden style
        }
    }
});

/*------ PARSE Communication and Calculations -----*/
Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

// Get current user
var user = Parse.User.current();
var table = document.getElementById("gold_table");

var Coin = Parse.Object.extend("Coin");
var query = new Parse.Query(Coin);
query.equalTo("owner", user.id); // Owner must match current user
query.equalTo("metal", "Gold"); // Only get Gold metals
query.ascending("name");

var coins = new Coin(); // An array to hold all our items from database
var totalVal = 0;

query.find({
  success: function(coins) {
    // Do something with the each returned Parse.Object values
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i];

      // Get corresponding values from database
      var name = coin.get("name");
      var quantity = coin.get("quantity");
      var weight = coin.get("grams");
      var percent = coin.get("percent");
      var premium = coin.get("premium");

      // Create table cell for each element and add to HTML page
      var row = table.insertRow(i+1);
      row.setAttribute("id", coin.id);
      row.setAttribute("class", "clickable");
      var cell0 = row.insertCell(0);
      cell0.setAttribute("class", "stack_img_col");
      var div_child = document.createElement("div");
      div_child = cell0.appendChild(div_child);
      div_child.setAttribute("class", "coin_mini");
      var img_child = document.createElement("img");
      img_child = div_child.appendChild(img_child);
      img_child.setAttribute("src", "images/" + name + ".jpg");
      img_child.setAttribute("class", "img_thumb");
      var cell1 = row.insertCell(1);
      cell1.setAttribute("onClick", "loadData(\"" + coin.id + "\")");
      cell1.innerHTML = name;
      var cell2 = row.insertCell(2);
      cell2.setAttribute("onClick", "loadData(\"" + coin.id + "\")");
      cell2.innerHTML = quantity;
      var cell3 = row.insertCell(3);
      cell3.setAttribute("onClick", "loadData(\"" + coin.id + "\")");
      cell3.innerHTML = weight;
      var cell4 = row.insertCell(4);
      cell4.setAttribute("onClick", "loadData(\"" + coin.id + "\")");
      cell4.innerHTML = percent;
      var cell5 = row.insertCell(5);
      cell5.setAttribute("onClick", "loadData(\"" + coin.id + "\")");

      // Calculate the worth of all the coins and update HTML page
      var goldperunit = Math.round((weight * percent) * 10000) / 10000;
      var ozt = Math.round((goldperunit / (31.1034768)) * 10000) / 10000;
      var price = ((ozt*recentVal) + premium)* quantity;
      cell5.innerHTML = Number(Math.round(price+'e'+2)+'e-'+2);
      totalVal += Number(Math.round(price+'e'+2)+'e-'+2);
      document.getElementById("total-dollars").innerHTML = "$ "+ Number(Math.round(totalVal+'e'+2)+'e-'+2);
      
      // Deletion (Trash Can) feature
      // Add trash can at the end of each element
      var cell6 = row.insertCell(6);
      cell6.setAttribute("class", "trashcol");
      var child1 = document.createElement("span");
      child1 = cell6.appendChild(child1);
      child1.setAttribute("class", "trash");
      var child2 = document.createElement("img");
      child2 = child1.appendChild(child2);
      child2.setAttribute("class", "trashicon");
      child2.setAttribute("src", "assets/trashcan.png");
      child2.setAttribute("height", "20px");
      child2.setAttribute("width", "20px");
      child2.setAttribute("onClick", "deleteCoin(\"" + coin.id + "\")");

      // Confirmation for deletions
      var sure = document.createElement("span");
      sure = child1.appendChild(sure);
      sure.style.display = "none";
      sure.setAttribute("class", "sure");
      sure.innerHTML="Are you sure?";

      var br_child = document.createElement("br");
      br_child=sure.appendChild(br_child);

      var yes_child = document.createElement("span");
      yes_child=sure.appendChild(yes_child);
      yes_child.setAttribute("class", "yes");
      yes_child.innerHTML = "yes ";

      var no_child = document.createElement("span");
      yes_child=sure.appendChild(no_child);
      yes_child.setAttribute("class", "no");
      yes_child.innerHTML = " no";

    }

  },
  error: function(error) { 
    // Display error message if fetch fails
    alert("Error: " + error.message);
  }

});

/* LOADING NEW PAGE */

function loadData(id) {
    window.location.assign("wire4.html" + "?" + id);
}


$("#gold_table").on("click", ".no", function () {
    var x = this.parentNode;
    x.style.display="none";
    x.parentNode.childNodes[0].style.display="inline";

});

$("#gold_table").on("click", ".yes", function () {
    var x = this.parentNode.parentNode.parentNode.parentNode;
    $("#" + x.id).fadeOut(function () {
        $("#" + x.id).remove();
    });
    deleteFromStack(x.id);
});

