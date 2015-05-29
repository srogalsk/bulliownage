Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

var user = Parse.User.current();

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
      /* TODO: get
      */
      var name = coin.get("name");
      console.log(name);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});