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

    var select = document.getElementById("category");
    coin.set("metal", select.options[select.selectedIndex].text);
    coin.set("name", document.getElementById("type").value);
    coin.set("purchasedAt", new Date(document.getElementById("purchase_date").value));
    coin.set("quantity", Number(document.getElementById("quantity").value));
    coin.set("premium", Number(document.getElementById("premium").value));
    coin.set("percent", Number(document.getElementById("percent").innerHTML));
    coin.set("grams", Number(document.getElementById("grams").innerHTML));
    coin.set("owner", user.id);
    coin.set("unit", Number(document.getElementById("price").value));

    alert("bullion");

    if (calc()) {
        coin.save(null, {
            success: function(coin) {
                window.location = "wire3.html";
                alert("Bullion added successfully");
            },
            error: function(coin, error) {
                alert("Invalid bullion information");
            }
        });
    } else {
    }

}

calc();
table = document.addEventListener("keyup", calc);
