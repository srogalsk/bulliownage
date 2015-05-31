Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");


var goldArr = [["US Gold Eagle", "pee", "doodle"], ["US Gold Eagle", "pee", "doodle"]];
var silverArr = [["US Silver Eagle", "pee", "doodle"], ["US Gold Eagle", "pee", "doodle"]];
var platArr = [["US Platinum Eagle", "pee", "doodle"], ["US Gold Eagle", "pee", "doodle"]];

function emptyList( box ) {
    // Set each option to null thus removing it
    while ( box.options.length ) box.options[0] = null;
}

function fillList( box, arr ) {
// arr[0] holds the display text
// arr[1] are the values

    for ( i = 0; i < arr[0].length; i++ ) {

        // Create a new drop down option with the
        // display text and value from arr
        option = new Option( arr[0][i], arr[1][i] );

        // Add to the end of the existing options
        box.options[box.length] = option;
    }
    // Preselect option 0
    box.selectedIndex=0;
}

changeList = function () {
    var category = document.getElementById("category");
    var newlist;
    switch(category.value){
        case "gold":
            newlist=goldArr;
            break;
        case "silver":
            newlist=silverArr;
            break;
        case "platinum":
            newlist=platArr;
            break;
        default:
            newlist=goldArr;
            break;
    } 
    emptyList(document.getElementById("type"));
    fillList(document.getElementById("type"),newlist);
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

    coin.save(null, {
        success: function(coin) {
            window.location = "wire3.html";
            alert("Bullion Added Successfully!");
        },
        error: function(coin, error) {
            alert("Invalid Bullion Information");
        }
    });

}
