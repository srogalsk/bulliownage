Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

var user = Parse.User.current();

var Coin = Parse.Object.extend("Coin");
var query = new Parse.Query(Coin);
var coin = new Coin();

query.get("MjhMMmwzZJ", {
  success: function(coin) {
    // The object was retrieved successfully.
    console.log("query success");

    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var metal = coin.get("metal");
    var name = coin.get("name");
    var purchasedAt = coin.get("purchasedAt");
    var quantity = coin.get("quantity");
    var premium = coin.get("premium");

    $("#displaymetal").text(metal);
    $("#displayname").text(name);
    console.log(purchasedAt);
    var date = purchasedAt.getDate();
    var month = months[purchasedAt.getMonth()];
    var year = purchasedAt.getFullYear();
    $("#displaypurchasedate").text(date + " " + month + " " + year);
    $("#displayquantity").text(quantity);
    $("#displaypremium").text(premium);

  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});
