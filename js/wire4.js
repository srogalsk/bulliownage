Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

var user = Parse.User.current();

var Coin = Parse.Object.extend("Coin");
var query = new Parse.Query(Coin);

query.get("MjhMMmwzZJ", {
  success: function(coin) {
    // The object was retrieved successfully.
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});

var metal = coin.get("metal");
var name = coin.get("name");
var purchasedAt = coin.get("purchasedAt");
var quantity = coin.get("quantity");
var premium = coin.get("premium");

$("#displaymetal").text(metal);
