// Get and populate Gold Data
    var json_obj_daily = [];
        try{
            json_obj_daily = Get("https://www.quandl.com/api/v1/datasets/LBMA/GOLD.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=", 1);
            localStorage.setItem("lastGoldDataONEMONTH", JSON.stringify(json_obj_daily));
        }
        catch(err){
            json_obj_daily = JSON.parse(localStorage.getItem("lastGoldDataONEMONTH"));
        }

    // get Change data
    var goldChange = json_obj_daily.data[0][1] - json_obj_daily.data[1][1];
    goldChange = Number(Math.round(goldChange + 'e' +2) + 'e-' +2);
    if(goldChange >= 0){ 
        sign = "+";
    }
    else{
        sign = "";
        document.getElementById("goldChange").className = "neg-change";
    }
    document.getElementById("goldChange").innerHTML = sign + goldChange;

// Get and populate Silver Data
    var silver_json_obj_daily = [];
        try{
            silver_json_obj_daily = Get("https://www.quandl.com/api/v1/datasets/OFDP/SILVER_5.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=", 1);
            localStorage.setItem("lastSilverDataONEMONTH", JSON.stringify(silver_json_obj_daily));
        }
        catch(err){
            silver_json_obj_daily = JSON.parse(localStorage.getItem("lastSilverDataONEMONTH"));
        }

    // get Change data
    var silverChange = silver_json_obj_daily.data[0][1] - silver_json_obj_daily.data[1][1];
    silverChange = Number(Math.round(silverChange + 'e' + 2) + 'e-' + 2);
    if(silverChange >= 0){ 
        sign = "+";
    }
    else{
        sign = "";
        document.getElementById("silverChange").className = "neg-change";
    }
    document.getElementById("silverChange").innerHTML = sign + silverChange;

// Get and populate Plat Data
var plat_json_obj_daily = [];
        try{
            plat_json_obj_daily = Get("https://www.quandl.com/api/v1/datasets/LPPM/PLAT.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",1 );
            localStorage.setItem("lastPlatDataONEMONTH", JSON.stringify(plat_json_obj_daily));
        }
        catch(err){
            plat_json_obj_daily = JSON.parse(localStorage.getItem("lastPlatDataONEMONTH"));
        }


    var platChange = plat_json_obj_daily.data[0][1] - plat_json_obj_daily.data[1][1];
    platChange = Number(Math.round(platChange + 'e' + 2) + 'e-' + 2);
    if(platChange >= 0){ 
        sign = "+";
    }
    else{
        sign = "";
        document.getElementById("platChange").className = "neg-change";
    }
    document.getElementById("platChange").innerHTML = sign + platChange;



// Get Market Status
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9,30,0,0);
    var dayDiff = 0;
    while(tomorrow.getDay() == 6 || tomorrow.getDay() == 0){
        tomorrow.setDate(tomorrow.getDate() + 1);
        dayDiff += 1;
    }
    // Can use this to set different market times
    var opentime = new Date();
    opentime.setHours(9,30,0,0);
    var closetime = new Date();
    closetime.setHours(16,30,0,0);

// Check if market is currently open
    if (today > opentime && today < closetime && today.getDay() !=0 && today.getDay() != 6){
        var hourleft = closetime.getHours() - today.getHours();
        var minleft = 0;
        if(today.getMinutes() <= 30){
            minleft = closetime.getMinutes() - today.getMinutes();
        }
        else{
            minleft = 30 + (60-today.getMinutes());
        }
        document.getElementById("marketStatus").innerHTML = "Market is OPEN";
        document.getElementById("closeTime").innerHTML = "Closes in " + hourleft +"h " + minleft + "min";
        
    }
    else{ // If market is closed, calculate when it will open again
        var hourleft = 0;
        if (dayDiff > 0){
            hourleft = 24 - today.getHours();
            hourleft = hourleft + dayDiff * 24;
            hourleft += 9;
        }  
        else{
            hourleft = 24 + 9 - today.getHours();
        } 
        var minleft = tomorrow.getMinutes() - today.getMinutes();
        if (minleft < 0){
            minleft = 30 + (60 - today.getMinutes());
        }
        document.getElementById("marketStatus").innerHTML = "Market is CLOSED";
        document.getElementById("closeTime").innerHTML = "Opens in " + hourleft + "h " + minleft + "min";
    }

// Fill bid and asking prices
    function getData() {
        return $.ajax({
            type: "GET",
            dataType: 'text',
            url: "https://cse134b.herokuapp.com/jm",
            crossDomain : true,
            error: function(msg){
                var jsonAB = JSON.parse(localStorage.getItem("bidask"));
                document.getElementById("goldBidVal").innerHTML = jsonAB[0].bid;
                document.getElementById("goldAskVal").innerHTML = jsonAB[0].ask;
                document.getElementById("silverBidVal").innerHTML = jsonAB[1].bid;
                document.getElementById("silverAskVal").innerHTML = jsonAB[1].ask;
                document.getElementById("platBidVal").innerHTML = jsonAB[2].bid;
                document.getElementById("platAskVal").innerHTML = jsonAB[2].ask;  
            },
            xhrFields: {
                withCredentials: false
            }
        });
    }
    function handleData( csvdata ) {
        var bidAskVals = [];
        var jsonAB = [];
        jsonAB = eval(csvdata);
        localStorage.setItem("bidask", JSON.stringify(eval(csvdata)));

        // 0 for gold, 1 for silver, 2 for plat
        document.getElementById("goldBidVal").innerHTML = jsonAB[0].bid;
        document.getElementById("goldAskVal").innerHTML = jsonAB[0].ask;
        document.getElementById("silverBidVal").innerHTML = jsonAB[1].bid;
        document.getElementById("silverAskVal").innerHTML = jsonAB[1].ask;
        document.getElementById("platBidVal").innerHTML = jsonAB[2].bid;
        document.getElementById("platAskVal").innerHTML = jsonAB[2].ask;  
    }

    getData().done(handleData);


/* ----- Parse Related -----*/
    Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
"nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

var user = Parse.User.current();

var Coin = Parse.Object.extend("Coin");
var query = new Parse.Query(Coin);
query.equalTo("owner", user.id);
var coins = new Coin();
var totalVal = 0;
var percentChange = 0;

query.find({
  success: function(coins) {
    // Do something with the returned Parse.Object values
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i];
      var name = coin.get("name");
      var type = coin.get("metal");
      var quantity = coin.get("quantity");
      var weight = coin.get("grams");
      var percent = coin.get("percent");
      var recentVal = 1;
      switch(type){
        case "Gold": 
            recentVal = json_obj_daily.data[0][1];
            break;
        case "Silver":
            recentVal = silver_json_obj_daily.data[0][1];
            break;
        case "Platinum":
            recentVal = plat_json_obj_daily.data[0][1];
            break;
        default:
            recentVal = json_obj_daily.data[0][1]; 
      }
      
    // Calculate the total assets
    var premium = coin.get("premium");
    var goldperunit = Math.round((weight * percent) * 10000) / 10000;
    var ozt = Math.round((goldperunit / (31.1034768)) * 10000) / 10000;
    var price = ((ozt*recentVal) + premium)* quantity;
    totalVal += Number(Math.round(price+'e'+2)+'e-'+2);
    document.getElementById("total-dollars").innerHTML = "$ "+ Number(Math.round(totalVal+'e'+2)+'e-'+2)

    }
  },
  error: function(error) {
    // output error if failed to grab data
    alert("Error: " + error.code + " " + error.message);
  }

});