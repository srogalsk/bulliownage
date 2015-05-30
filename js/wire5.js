Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

function calc() {
	var price = Number(document.getElementById("price").value) + Number(document.getElementById("premium").value);
	var total = (price * document.getElementById("quantity").value).toFixed(2);
    if (isNaN(total) || total < 0) {
        document.getElementById("total").innerHTML = "Invalid quantity or premium entered";
        return false;
    } else {
        document.getElementById("total").innerHTML = total;
        return true;
    }
}

function saveToStack() {

    var user = Parse.User.current();
    var Coin = Parse.Object.extend("Coin");
    var coin = new Coin();

/*
    coin.set("metal", document.getElementById());
    coin.set("name", document);
    coin.set("purchasedAt", document);
    coin.set("quantity", document);
*/
    var select = document.getElementById("category");
    coin.set("metal", select.options[select.selectedIndex].text);
    coin.set("name", document.getElementById("type").value);
//    coin.set("purchasedAt", document.getElementById("purchase_date").value);
    coin.set("quantity", Number(document.getElementById("quantity").value));
    coin.set("premium", Number(document.getElementById("premium").value));
    coin.set("percent", Number(document.getElementById("percent").innerHTML));
    coin.set("grams", Number(document.getElementById("grams").innerHTML));
    coin.set("owner", user.id);

    console.log(coin.get("metal"));
    console.log(coin.get("name"));
    console.log(coin.get("purchasedAt"));
    console.log(coin.get("quantity"));
    console.log(coin.get("premium"));
    console.log(coin.get("percent"));
    console.log(coin.get("grams"));
    console.log(coin.get("owner"));

    if (calc()) {
        coin.save(null, {
            success: function(coin) {
                console.log('New object created with objectId: ' + coin.id);
            },
            error: function(coin, error) {
                console.log('Failed to create new object, with error code: ' + error.message);
            }
        });
    } else {
    }

}

calc();
table = document.addEventListener("keyup", calc);
