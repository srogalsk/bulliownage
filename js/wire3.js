Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

var user = Parse.User.current();
var table = document.getElementById("gold_table");

alert(table);

var Coin = Parse.Object.extend("Coin");
var query = new Parse.Query(Coin);
query.equalTo("owner", user.id);
query.equalTo("metal", "Gold");
var coins = new Coin();

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
      cell5.innerHTML = "1000";


      console.log(name);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});