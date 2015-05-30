Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

var path = window.location.pathname;
var page = path.split("/").pop();

if(page == "wire4.html")
    loadData();

function loadData() {
    id = ($(".clickable").attr("id"));
    alert("ID is: " + ($(".clickable").attr("id")));

    alert("Populating Now, the ID is: " + id );
    var user = Parse.User.current();

    var Coin = Parse.Object.extend("Coin");
    var query = new Parse.Query(Coin);
    var coin = new Coin();

    query.get(id, {
        success: function (coin) {
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
            var percent = coin.get("percent");
            var grams = coin.get("grams"); //weight per unit


            $("#displaymetal").text(metal);
            $("#displayname").text(name);
            console.log(purchasedAt);
            var date = purchasedAt.getDate();
            var month = months[purchasedAt.getMonth()];
            var year = purchasedAt.getFullYear();
            $("#displaypurchasedate").text(date + " " + month + " " + year);
            $("#displayquantity").text(quantity);
            $("#displaypremium").text(premium.toFixed(2));
            $("#displayweightperunit").text(grams);
            $("#displaypercent").text(percent);

            var goldperunit = Math.round((grams * percent) * 10000) / 10000;
            var totalgold = Math.round((goldperunit * quantity) * 10000) / 10000;
            var ozt = Math.round((goldperunit / (31.1034768)) * 10000) / 10000;
            var totalozt = Math.round((ozt * quantity) * 10000) / 10000;

            $("#displayozt").text(ozt.toPrecision(3));
            $("#displaytotalozt").text(totalozt.toPrecision(3));
            $("#displaygoldperunit").text(goldperunit.toPrecision(4));

            /* TODO: unit price = ozt*spot price + premium
             var unitprice = ozt*
             var totalprice = unitprice*quantity.toFixed(2);
             $("#displayunitprice").text(unitprice);
             $("#displaytotalprice").text(totalprice);
             */

        },
        error: function (object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
        }
    });
}