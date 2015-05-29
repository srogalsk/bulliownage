Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

var user = Parse.User.current();

var Coin = Parse.Object.extend("Coin");
var query = new Parse.Query(Coin);
query.equalTo("owner", user.getObjectID());
query.equalTo("metal", "Gold");
var coin = new Coin();

query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " coins");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      /* TODO: get
      */
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});