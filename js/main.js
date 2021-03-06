function changePage() {
    window.location = ("settings.html");
}

function loadRollbar(){ //should be above all other script calls
	var _rollbarConfig = {
		    accessToken: "a0832fc88bfa4b699482dfc776f1ab9a",
		    captureUncaught: true,
		    payload: {
		        environment: "production"
		    }
		};
	!function(a,b){function c(b){this.shimId=++h,this.notifier=null,this.parentShim=b,this.logger=function(){},a.console&&void 0===a.console.shimId&&(this.logger=a.console.log)}function d(b,c,d){a._rollbarWrappedError&&(d[4]||(d[4]=a._rollbarWrappedError),d[5]||(d[5]=a._rollbarWrappedError._rollbarContext),a._rollbarWrappedError=null),b.uncaughtError.apply(b,d),c&&c.apply(a,d)}function e(b){var d=c;return g(function(){if(this.notifier)return this.notifier[b].apply(this.notifier,arguments);var c=this,e="scope"===b;e&&(c=new d(this));var f=Array.prototype.slice.call(arguments,0),g={shim:c,method:b,args:f,ts:new Date};return a._rollbarShimQueue.push(g),e?c:void 0})}function f(a,b){if(b.hasOwnProperty&&b.hasOwnProperty("addEventListener")){var c=b.addEventListener;b.addEventListener=function(b,d,e){c.call(this,b,a.wrap(d),e)};var d=b.removeEventListener;b.removeEventListener=function(a,b,c){d.call(this,a,b&&b._wrapped?b._wrapped:b,c)}}}function g(a,b){return b=b||this.logger,function(){try{return a.apply(this,arguments)}catch(c){b("Rollbar internal error:",c)}}}var h=0;c.init=function(a,b){var e=b.globalAlias||"Rollbar";if("object"==typeof a[e])return a[e];a._rollbarShimQueue=[],a._rollbarWrappedError=null,b=b||{};var h=new c;return g(function(){if(h.configure(b),b.captureUncaught){var c=a.onerror;a.onerror=function(){var a=Array.prototype.slice.call(arguments,0);d(h,c,a)};var g,i,j="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(g=0;g<j.length;++g)i=j[g],a[i]&&a[i].prototype&&f(h,a[i].prototype)}return a[e]=h,h},h.logger)()},c.prototype.loadFull=function(a,b,c,d,e){var f=g(function(){var a=b.createElement("script"),e=b.getElementsByTagName("script")[0];a.src=d.rollbarJsUrl,a.async=!c,a.onload=h,e.parentNode.insertBefore(a,e)},this.logger),h=g(function(){var b;if(void 0===a._rollbarPayloadQueue){var c,d,f,g;for(b=new Error("rollbar.js did not load");c=a._rollbarShimQueue.shift();)for(f=c.args,g=0;g<f.length;++g)if(d=f[g],"function"==typeof d){d(b);break}}"function"==typeof e&&e(b)},this.logger);g(function(){c?f():a.addEventListener?a.addEventListener("load",f,!1):a.attachEvent("onload",f)},this.logger)()},c.prototype.wrap=function(b,c){try{var d;if(d="function"==typeof c?c:function(){return c||{}},"function"!=typeof b)return b;if(b._isWrap)return b;if(!b._wrapped){b._wrapped=function(){try{return b.apply(this,arguments)}catch(c){throw c._rollbarContext=d()||{},c._rollbarContext._wrappedSource=b.toString(),a._rollbarWrappedError=c,c}},b._wrapped._isWrap=!0;for(var e in b)b.hasOwnProperty(e)&&(b._wrapped[e]=b[e])}return b._wrapped}catch(f){return b}};for(var i="log,debug,info,warn,warning,error,critical,global,configure,scope,uncaughtError".split(","),j=0;j<i.length;++j)c.prototype[i[j]]=e(i[j]);var k="//d37gvrvc0wt4s1.cloudfront.net/js/v1.2/rollbar.min.js";_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||k;var l=c.init(a,_rollbarConfig);l.loadFull(a,b,!1,_rollbarConfig)}(window,document);

}
function loadTopNav(){
	document.write("    <nav>");
	document.write("        <svg class=\"icon-spinner2\">");
	document.write("            <symbol id=\"icon-spinner2\" viewBox=\"0 0 1024 1024\">");
	document.write("                <title>spinner2<\/title>");
	document.write("                <path class=\"path1\" d=\"M1024 384h-384l143.53-143.53c-72.53-72.526-168.96-112.47-271.53-112.47s-199 39.944-271.53 112.47c-72.526 72.53-112.47 168.96-112.47 271.53s39.944 199 112.47 271.53c72.53 72.526 168.96 112.47 271.53 112.47s199-39.944 271.528-112.472c6.056-6.054 11.86-12.292 17.456-18.668l96.32 84.282c-93.846 107.166-231.664 174.858-385.304 174.858-282.77 0-512-229.23-512-512s229.23-512 512-512c141.386 0 269.368 57.326 362.016 149.984l149.984-149.984v384z\"><\/path>");
	document.write("            <\/symbol>");
	document.write("            <use xlink:href=\"#icon-spinner2\"><\/use>");
	document.write("        <\/svg>");
	document.write("        <a href=\"wire2.html\">BULLIOWNAGE<\/a>");
	document.write("        <svg class=\"icon-cog\" onClick=\"changePage()\"");
	document.write("            <symbol id=\"icon-cog\" viewBox=\"0 0 1024 1024\">");
	document.write("                <title>cog<\/title>");
	document.write("                <path class=\"path1\" d=\"M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z\"><\/path>");
	document.write("            <\/symbol>");
	document.write("            <use xlink:href=\"#icon-cog\"><\/use>");
	document.write("        <\/svg> ");
	document.write("    <\/nav>");
}

function loadTopNavPersist(){
	document.write("    <nav style='display: block; visibility: visible;'>");
	document.write("        <svg class=\"icon-spinner2\">");
	document.write("            <symbol id=\"icon-spinner2\" viewBox=\"0 0 1024 1024\">");
	document.write("                <title>spinner2<\/title>");
	document.write("                <path class=\"path1\" d=\"M1024 384h-384l143.53-143.53c-72.53-72.526-168.96-112.47-271.53-112.47s-199 39.944-271.53 112.47c-72.526 72.53-112.47 168.96-112.47 271.53s39.944 199 112.47 271.53c72.53 72.526 168.96 112.47 271.53 112.47s199-39.944 271.528-112.472c6.056-6.054 11.86-12.292 17.456-18.668l96.32 84.282c-93.846 107.166-231.664 174.858-385.304 174.858-282.77 0-512-229.23-512-512s229.23-512 512-512c141.386 0 269.368 57.326 362.016 149.984l149.984-149.984v384z\"><\/path>");
	document.write("            <\/symbol>");
	document.write("            <use xlink:href=\"#icon-spinner2\"><\/use>");
	document.write("        <\/svg>");
	document.write("        <a href=\"wire2.html\">BULLIOWNAGE<\/a>");
	document.write("        <svg class=\"icon-cog\" onClick=\"changePage()\">");
	document.write("            <symbol id=\"icon-cog\" viewBox=\"0 0 1024 1024\">");
	document.write("                <title>cog<\/title>");
	document.write("                <path class=\"path1\" d=\"M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z\"><\/path>");
	document.write("            <\/symbol>");
	document.write("            <use xlink:href=\"#icon-cog\"><\/use>");
	document.write("        <\/svg>");
	document.write("    <\/nav>");
}

function loadSideNav(selected){
	document.write("    <aside>");
	document.write("        <a href=\"wire2.html\">");
	if(selected == 0)
		document.write("        <figure class='nav-selected'>");
	else
		document.write("        <figure>");
	document.write("            <br\/>");
	document.write("              <svg class=\"icon-home2\">");
	document.write("                    <symbol id=\"icon-home2\" viewBox=\"0 0 1024 1024\">");
	document.write("                        <title>home2<\/title>");
	document.write("                        <path class=\"path1\" d=\"M426.667 853.333v-256h170.667v256h213.333v-341.333h128l-426.667-384-426.667 384h128v341.333z\"><\/path>");
	document.write("                    <\/symbol>");
	document.write("                    <use xlink:href=\"#icon-home2\"><\/use>");
	document.write("                <\/svg>");
	document.write("");
	document.write("            <figcaption>Home<\/figcaption>");
	document.write("        <\/figure>       ");
	document.write("        <\/a> ");
	document.write("        <a href=\"wire3.html\">");
	if(selected == 1)
		document.write("        <figure class='nav-selected'>");
	else
		document.write("        <figure>");
	document.write("            Au");
	document.write("            <figcaption>My Gold<\/figcaption>");
	document.write("        <\/figure>       ");
	document.write("        <\/a> ");
	document.write("        <a href=\"wire3b.html\">");
	if(selected == 2)
		document.write("        <figure class='nav-selected'>");
	else
		document.write("        <figure>");
	document.write("            Ag");
	document.write("            <figcaption>My Silver<\/figcaption>");
	document.write("        <\/figure>       ");
	document.write("        <\/a> ");
	document.write("        <a href=\"wire3c.html\">");
	if(selected == 3)
		document.write("        <figure class='nav-selected'>");
	else
		document.write("        <figure>");
	document.write("            Pt");
	document.write("            <figcaption>My Platinum<\/figcaption>");
	document.write("        <\/figure>");
	document.write("        <\/a> ");
	document.write("    <\/aside>");
}

function loadFooter(){
	document.write("    <footer>");
	document.write("        &copy; 2015 BULLIOWNAGE");
	document.write("    <\/footer> ");

}

function facebookLogin()
{
	Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
		"nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

	console.log("testing");

	window.fbAsyncInit = function () {
		Parse.FacebookUtils.init({ // this line replaces FB.init({
			appId: 860624237308675, // Facebook App ID
			status: true,  // check Facebook Login status
			cookie: true,  // enable cookies to allow Parse to access the session
			xfbml: true,  // initialize Facebook social plugins on the page
			version: 'v2.3' // point to the latest Facebook Graph API version
		});

		// Run code after the Facebook SDK is loaded.
		Parse.FacebookUtils.logIn(null, {
			success: function (user) {
                mixpanel.track("Facebook Login");
				window.location.replace("wire2.html");
			},
			error: function (user, error) {
				console.log("User cancelled the Facebook login or did not fully authorize.");
			}
		});
	};


	(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s);
		js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=860624237308675";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}


function Get(yourPartialUrl, months){
    var d = new Date();
    d.setMonth(d.getMonth() - months);
    var Httpreq = new XMLHttpRequest(); // a new request
	var month = d.getMonth() + 1;
	var date = d.getDate();
	if(month < 10)
	{
		month = "0" + Number(month);
	}
	if(date < 10)
	{
		date = "0" + Number(date);
	}
	Httpreq.open("GET",yourPartialUrl + d.getFullYear() + "-" + (month) + "-" + (date),false);
    Httpreq.send(null);
    var json_obj = JSON.parse(Httpreq.responseText); 
    return json_obj;
}

function trashCoin(id) {
    var Coin = Parse.Object.extend("Coin");
    var query = new Parse.Query(Coin);
    query.equalTo("objectId", id);
    query.first({
        success: function(coin) {
            coin.destroy({
                success: function(deleted) {
                },
                error: function(deleted, error) {
                    alert("Bullion not found");
                }
            });
        },
        error: function(error) {
            alert("Invalid information");
        }
    });
}

function deleteFromStack(id) {
    var Coin = Parse.Object.extend("Coin");
    var query = new Parse.Query(Coin);
    var metal = document.getElementById("displaymetal").innerHTML;
    query.equalTo("objectId", id);
    query.first({
        success: function(coin) {
            coin.destroy({
                success: function(deleted) {
		    if (metal == "Gold") {
                        window.location = "wire3.html";
                    } else if (metal == "Silver") {
                        window.location = "wire3b.html";
                    } else if (metal == "Platinum") {
                        window.location = "wire3c.html";
                    }
                    window.location = "wire3.html";
                    alert("Bullion removed successfully");
                },
                error: function(deleted, error) {
                    alert("Bullion not found");
                }
            });
        },
        error: function(error) {
            alert("Invalid information");
        }
    });
}

function removeFromStack() {
    var q_string = window.location.search;
    if (q_string.substring(0, 1) == '?') {
        q_string = q_string.substring(1);
    }
    deleteFromStack(q_string);
}

function parseArrayUpdate(historyArr, columnName){
	Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");
	var user = Parse.User.current();
	user.unset(columnName);
	user.save();
	//console.log(historyArr.length);
	for (var i = 0; i < 31; i++){
		user.add(columnName, historyArr[i]);
	}
	user.save();
} 


function parseData(recentVal, callback, metaltype){
	Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

	var user = Parse.User.current();

	var Coin = Parse.Object.extend("Coin");
	var query = new Parse.Query(Coin);
	query.equalTo("owner", user.id);
	query.equalTo("metal", metaltype);
	var coins = new Coin();
	var totalVal = 0;
	

	query.find({
	  	success: function(coins) {
	    // Do something with the returned Parse.Object values
	    for (var i = 0; i < coins.length; i++) {
	      var coin = coins[i];

	      var name = coin.get("name");
	      var quantity = coin.get("quantity");
	      var weight = coin.get("grams");
	      var percent = coin.get("percent");
	      var premium = coin.get("premium");

	      var goldperunit = Math.round((weight * percent) * 10000) / 10000;
	      var ozt = Math.round((goldperunit / (31.1034768)) * 10000) / 10000;
	      var price = ((ozt*recentVal) + premium)* quantity;
	      totalVal += Number(Math.round(price+'e'+2)+'e-'+2);

	    }

	    var historyArr = [];

	    if(metaltype == "Gold"){
	    	historyArr = user.get("goldHistory");
	    }
	    else if(metaltype == "Silver"){
	    	historyArr = user.get("silverHistory");
	    }
	    else {
	    	historyArr = user.get("platHistory");
	    }
	    
	    try{
	    	historyArr.push(totalVal);
	    	//console.log(historyArr);
	    	callback(historyArr);
		}
		catch(err){
			return;
		}
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}


function timeCheck()
{
	Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
		"nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

	var user = Parse.User.current();

	var time = user.get("time");
	var d = new Date();
	var currTime = d.getTime();
	//console.log("The current time is: " + currTime);
	//console.log("The old time is: " + time);
	//console.log("Their difference is: " + (currTime - time));
	//console.log("Is their difference greater than 24 hours: " + ((currTime-time) >= 86400000));

	if((currTime - time) >= 86400000)
	{
		user.set("time", currTime);
		user.save();
		//console.log("The time has been updated")
		return true;
	}
	else
	{
		//console.log("No need to update time right now");
		return false;
	}
}

function changeBackground() {
   var user = Parse.User.current();
   color = "";
   try{
   		color = user.get("color");
   }
   catch(err){
   	 	color = "#1D1D1D";
   }
   document.body.style.background = color;
}

$(window).load(function() {
	Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
		"nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

    var user = Parse.User.current();
    /* save information about the user */
    if(Parse.User.current() != null) {
        mixpanel.identify(Parse.User.current().get("username"));
        mixpanel.people.set({
            "$email": Parse.User.current().get("email"),    // only special properties need the $

            "$created": Parse.User.current().get("createdAt"),
            "$last_login": new Date()         // properties can be dates...
        });
    }
	var path = window.location.pathname;
		var page = path.split("/").pop();


	/* * * * * * * * * * * * * *
	 *                         *
	 *        GENERAL          *
	 *                         *
	 * * * * * * * * * * * * * */

	 $('.icon-spinner2').click(function(){
	 	location.reload();	
	 });

	 // Color Change
	 changeBackground();
	 //$('tr').click(function(){
	 	//$(this).find('a')[0].click();
	 //});



	/* * * * * * * * * * * * * *
	 *                         *
	 *        GRAPHING         *
	 *                         *
	 * * * * * * * * * * * * * */
 	// graph for wire2 page
	var drawGraph = function(){
 		var pointStroke = "rgba(255,255,255,0.6)";
 		var pointHighlightFill = "#fff";
 		var pointHighlightStroke = "#fff";

 		if(page == "wire2.html") {
 			var goldHistory = [];
	 		var silverHistory = [];
	 		var platHistory = [];
 			var ctxGold = document.getElementById("total-chart").getContext("2d");

 			/*** 	Get Gold Graph Data ***/
	 		var goldGraphData = [];
	 		try{
				goldGraphData = Get("https://www.quandl.com/api/v1/datasets/LBMA/GOLD.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",3);
				localStorage.setItem("lastGoldData", JSON.stringify(goldGraphData));
			}
			catch(err){
				//alert(JSON.parse(localStorage.getItem("lastGoldData")));
				goldGraphData = JSON.parse(localStorage.getItem("lastGoldData"));
			}

	 		var goldDataset = [];
	 		var goldLabelset = [];
	        for(var i = 30; i >= 0; i--){
	          	goldLabelset.push(goldGraphData.data[i][0].replace("2015-", ""));
                goldDataset.push(Number(Math.round(goldGraphData.data[i][1]+'e'+2)+'e-'+2));
	        }

	        function callback(historyUpdate){
				historyUpdate.shift();
				goldHistory = historyUpdate;
				datasetsta.datasets[0].data = goldHistory;
				if(timeCheck()){
					parseArrayUpdate(goldHistory, "goldHistory");
				}
			}
			parseData(goldGraphData.data[0][1], callback, "Gold");

			// Get Silver Graph Data
		    var silverGraphData = [];
		    try{
				silverGraphData = Get("https://www.quandl.com/api/v1/datasets/OFDP/SILVER_5.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",3);
				localStorage.setItem("lastSilverData", JSON.stringify(silverGraphData));
			}
			catch(err){
				silverGraphData = JSON.parse(localStorage.getItem("lastSilverData"));
			}
           
	 		var silverDataset = [];
	 		var silverLabelset = [];
	        for(var i = 30; i >= 0; i--){
	          	silverLabelset.push(silverGraphData.data[i][0]);
                silverDataset.push(Number(Math.round((silverGraphData.data[i][1]*50)+'e'+2)+'e-'+2));
	        }

	        function callback1(historyUpdate){
	        	historyUpdate.shift();
				silverHistory = historyUpdate;
				data.datasets[2].data = silverHistory;
				if(timeCheck()){
					parseArrayUpdate(silverHistory, "silverHistory");
				}
			}
	        parseData(silverGraphData.data[0][1], callback1, "Silver");

	         // Get Plat Graph Data
		    var platGraphData = [];
		   	try{
				platGraphData = Get("https://www.quandl.com/api/v1/datasets/LPPM/PLAT.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",3);
				localStorage.setItem("lastPlatData", JSON.stringify(platGraphData));
			}
			catch(err){
				platGraphData  = JSON.parse(localStorage.getItem("lastPlatData"));
			}
	        
	 		var platDataset = [];
	 		var platLabelset = [];
	        for(var i = 30; i >= 0; i--){
	            platLabelset.push(platGraphData.data[i][0]);
                platDataset.push(Number(Math.round(platGraphData.data[i][1]+'e'+2)+'e-'+2));
	        }

	        function callback2(historyUpdate){
	        	historyUpdate.shift();
				platHistory = historyUpdate;
				data.datasets[1].data = platHistory;
				var coinChartGold =  new Chart(ctxGold).Line(data,options);
				coinChartGold.update();
				if(timeCheck()){
					parseArrayUpdate(platHistory, "platHistory");
				}
				var sum = (data.datasets[0].data[30] || 0) + (data.datasets[1].data[30] || 0) + (data.datasets[2].data[30] || 0);
				var prevsum = (data.datasets[0].data[29] || 0) + (data.datasets[1].data[29] || 0) + (data.datasets[2].data[29] || 0);
				var percentchange = 0;
				//console.log(sum);
				//console.log(prevsum);

				if (sum == prevsum || isNaN(sum) || isNaN(prevsum) || Number(prevsum) == 0){
					percentchange = 0;
				}
				else{
					percentchange = ((sum - prevsum) / prevsum) * 100;
				}
				var sign = "";
				sign = (percentchange < 0 ? "" : "+");
				document.getElementById("percentChange").innerHTML = sign + Number(Math.round(percentchange+'e'+2)+'e-'+2) + "%";

				var CA = document.getElementById("percentChange");
				CA.className = (percentchange < 0 ? "total-change neg-change" : "total-change pos-change");
			}

			parseData(platGraphData.data[0][1], callback2, "Platinum");




 			var data = {
 				labels: goldLabelset,
 				datasets: [
 				{
 					label: "Gold Total",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#FF6D67",
 					pointColor: "#FF6D67",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: []
 				},
 				{
 					label: "Platinum Total",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#FFA859",
 					pointColor: "#FFA859",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: []
 				},
 				{
 					label: "Silver Total",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#F3FF88",
 					pointColor: "#F3FF88",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: []
 				},
 				{
 					label: "1oz Gold",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#9FFF98",
 					pointColor: "#9FFF98",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: goldDataset
 				},
 				{
 					label: "1oz Platinum",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#BBF5FF",
 					pointColor: "#BBF5FF",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: platDataset
 				},
 				{
 					label: "1oz Silver",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#C29FFF",
 					pointColor: "#C29FFF",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: silverDataset
 				},
 				]
 			};

 			var options = {

			    ///Boolean - Whether grid lines are shown across the chart
			    scaleShowGridLines : true,

			    //String - Colour of the grid lines
			    scaleGridLineColor : "rgba(104, 206, 222, 0.1)",

			    //Number - Width of the grid lines
			    scaleGridLineWidth : 1,

			    //Boolean - Whether to show horizontal lines (except X axis)
			    scaleShowHorizontalLines: true,

			    //Boolean - Whether to show vertical lines (except Y axis)
			    scaleShowVerticalLines: true,

			    //Boolean - Whether the line is curved between points
			    bezierCurve : true,

			    //Number - Tension of the bezier curve between points
			    bezierCurveTension : 0.4,

			    //Boolean - Whether to show a dot for each point
			    pointDot : true,

			    //Number - Radius of each point dot in pixels
			    pointDotRadius : 4,

			    //Number - Pixel width of point dot stroke
			    pointDotStrokeWidth : 1,

			    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			    pointHitDetectionRadius : 20,

			    //Boolean - Whether to show a stroke for datasets
			    datasetStroke : true,

			    //Number - Pixel width of dataset stroke
			    datasetStrokeWidth : 2,

			    //Boolean - Whether to fill the dataset with a colour
			    datasetFill : true,

			    //String - A legend template
			    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

			    responsive: true,

			    maintainAspectRatio: false


			};

			//var ctx = document.getElementById("total-chart").getContext("2d");
			//var coinChart = new Chart(ctx).Line(data,options);
			//coinChart.update();
		}
		else if(page =="wire3.html"){
			var goldHistory = [];
			var ctxGold = document.getElementById("total-chart").getContext("2d");

			// 	Get Gold Graph Data
			var goldGraphData = [];
			try{
				goldGraphData = Get("https://www.quandl.com/api/v1/datasets/LBMA/GOLD.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",3);
			}
			catch(err){
				goldGraphData = JSON.parse(localStorage.getItem("lastGoldData"));
			}
	 		var goldDataset = [];
	 		var goldLabelset = [];

	 		function callback(goldHistoryUpdate){
	 			goldHistoryUpdate.shift();
				goldHistory = goldHistoryUpdate;
				data.datasets[0].data = goldHistory;
				var coinChartGold =  new Chart(ctxGold).Line(data,options);
				coinChartGold.update();

				if(timeCheck()){
					parseArrayUpdate(goldHistory, "goldHistory");
				}
			}
	 		parseData(goldGraphData.data[0][1], callback, "Gold");

	        for(var i = 30; i >= 0; i--){
	          	goldLabelset.push(goldGraphData.data[i][0].replace("2015-", ""));
	            goldDataset.push(goldGraphData.data[i][1]);
	        }

			var data = {
				labels: goldLabelset,
				datasets: [
				{
					label: "Gold Total",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#FF6D67",
					pointColor: "#FF6D67",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: goldHistory
				},
				{
					label: "1oz Gold",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#9FFF98",
					pointColor: "#9FFF98",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: goldDataset
				}
				]
			};

			var options = {

			    ///Boolean - Whether grid lines are shown across the chart
			    scaleShowGridLines : true,

			    //String - Colour of the grid lines
			    scaleGridLineColor : "rgba(104, 206, 222, 0.1)",

			    //Number - Width of the grid lines
			    scaleGridLineWidth : 1,

			    //Boolean - Whether to show horizontal lines (except X axis)
			    scaleShowHorizontalLines: true,

			    //Boolean - Whether to show vertical lines (except Y axis)
			    scaleShowVerticalLines: true,

			    //Boolean - Whether the line is curved between points
			    bezierCurve : true,

			    //Number - Tension of the bezier curve between points
			    bezierCurveTension : 0.4,

			    //Boolean - Whether to show a dot for each point
			    pointDot : true,

			    //Number - Radius of each point dot in pixels
			    pointDotRadius : 4,

			    //Number - Pixel width of point dot stroke
			    pointDotStrokeWidth : 1,

			    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			    pointHitDetectionRadius : 20,

			    //Boolean - Whether to show a stroke for datasets
			    datasetStroke : true,

			    //Number - Pixel width of dataset stroke
			    datasetStrokeWidth : 2,

			    //Boolean - Whether to fill the dataset with a colour
			    datasetFill : true,

			    //String - A legend template
			    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

			    responsive: true,

			    maintainAspectRatio: false


			};

			//var ctx = document.getElementById("total-chart").getContext("2d");
			//var coinChart = new Chart(ctx).Line(data,options);
			//coinChart.update();
		}
		else if(page =="wire3b.html"){
			var goldHistory = [];
			var ctxGold = document.getElementById("total-chart").getContext("2d");

			// 	Get Silver Graph Data
			var goldGraphData = [];
			try{
				goldGraphData = Get("https://www.quandl.com/api/v1/datasets/OFDP/SILVER_5.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",3);
			}
			catch(err){
				goldGraphData = JSON.parse(localStorage.getItem("lastSilverData"));
			}
			var goldDataset = [];
	 		var goldLabelset = [];

	 		function callback(goldHistoryUpdate){
	 			goldHistoryUpdate.shift();
				goldHistory = goldHistoryUpdate;
				data.datasets[0].data = goldHistory;
				var coinChartGold =  new Chart(ctxGold).Line(data,options);
				coinChartGold.update();

				if(timeCheck()){
					parseArrayUpdate(goldHistory, "silverHistory");
				}
			}
	 		parseData(goldGraphData.data[0][1], callback, "Silver");

	        for(var i = 30; i >= 0; i--){
	          	goldLabelset.push(goldGraphData.data[i][0].replace("2015-", ""));
	            goldDataset.push(goldGraphData.data[i][1]);
	        }

			var data = {
				labels: goldLabelset,
				datasets: [
				{
					label: "Silver Total",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#FF6D67",
					pointColor: "#FF6D67",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: goldHistory
				},
				{
					label: "1oz t Silver",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#9FFF98",
					pointColor: "#9FFF98",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: goldDataset
				}
				]
			};


			var options = {

			    ///Boolean - Whether grid lines are shown across the chart
			    scaleShowGridLines : true,

			    //String - Colour of the grid lines
			    scaleGridLineColor : "rgba(104, 206, 222, 0.1)",

			    //Number - Width of the grid lines
			    scaleGridLineWidth : 1,

			    //Boolean - Whether to show horizontal lines (except X axis)
			    scaleShowHorizontalLines: true,

			    //Boolean - Whether to show vertical lines (except Y axis)
			    scaleShowVerticalLines: true,

			    //Boolean - Whether the line is curved between points
			    bezierCurve : false,

			    //Boolean - Whether to show a dot for each point
			    pointDot : true,

			    //Number - Radius of each point dot in pixels
			    pointDotRadius : 4,

			    //Number - Pixel width of point dot stroke
			    pointDotStrokeWidth : 1,

			    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			    pointHitDetectionRadius : 5,

			    //Boolean - Whether to show a stroke for datasets
			    datasetStroke : true,

			    //Number - Pixel width of dataset stroke
			    datasetStrokeWidth : 1,

			    //Boolean - Whether to fill the dataset with a colour
			    datasetFill : true,

			    //String - A legend template
			    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

			    responsive: true,

			    maintainAspectRatio: false


			};

			//var coinChartGold = new Chart(ctxGold).Line(data,options);
			//coinChartGold.update();
		}
		else if(page =="wire3c.html"){
			var goldHistory = [];
			var ctxGold = document.getElementById("total-chart").getContext("2d");

			// 	Get Plat Graph Data
			var goldGraphData = [];
			try{
				goldGraphData = Get("https://www.quandl.com/api/v1/datasets/LPPM/PLAT.json?auth_token=F1s2QQVicUxmZi2jGRjz&trim_start=",3);
			}
			catch(err){
				goldGraphData = JSON.parse(localStorage.getItem("lastPlatData"));
			}
	 		var goldDataset = [];
	 		var goldLabelset = [];

	 		function callback(goldHistoryUpdate){
	 			goldHistoryUpdate.shift();
				goldHistory = goldHistoryUpdate;
				data.datasets[0].data = goldHistory;
				var coinChartGold =  new Chart(ctxGold).Line(data,options);
				coinChartGold.update();

				if(timeCheck()){
					parseArrayUpdate(goldHistory, "platHistory");
				}
			}
	 		parseData(goldGraphData.data[0][1], callback, "Platinum");

	        for(var i = 30; i >= 0; i--){
	          	goldLabelset.push(goldGraphData.data[i][0].replace("2015-", ""));
	            goldDataset.push(goldGraphData.data[i][1]);
	        }

			var data = {
				labels: goldLabelset,
				datasets: [
				{
					label: "Platinum Total",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#FF6D67",
					pointColor: "#FF6D67",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: goldHistory
				},
				{
					label: "1oz t Platinum",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#9FFF98",
					pointColor: "#9FFF98",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: goldDataset
				}
				]
			};


			var options = {

			    ///Boolean - Whether grid lines are shown across the chart
			    scaleShowGridLines : true,

			    //String - Colour of the grid lines
			    scaleGridLineColor : "rgba(104, 206, 222, 0.1)",

			    //Number - Width of the grid lines
			    scaleGridLineWidth : 1,

			    //Boolean - Whether to show horizontal lines (except X axis)
			    scaleShowHorizontalLines: true,

			    //Boolean - Whether to show vertical lines (except Y axis)
			    scaleShowVerticalLines: true,

			    //Boolean - Whether the line is curved between points
			    bezierCurve : false,

			    //Boolean - Whether to show a dot for each point
			    pointDot : true,

			    //Number - Radius of each point dot in pixels
			    pointDotRadius : 4,

			    //Number - Pixel width of point dot stroke
			    pointDotStrokeWidth : 1,

			    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			    pointHitDetectionRadius : 5,

			    //Boolean - Whether to show a stroke for datasets
			    datasetStroke : true,

			    //Number - Pixel width of dataset stroke
			    datasetStrokeWidth : 1,

			    //Boolean - Whether to fill the dataset with a colour
			    datasetFill : true,

			    //String - A legend template
			    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

			    responsive: true,

			    maintainAspectRatio: false


			};

			//var coinChartGold = new Chart(ctxGold).Line(data,options);
			//coinChartGold.update();
		}
	};

	drawGraph();

	/* * * * * * * * * * * * * *
	 *                         *
	 *     MOBILE HANDLING     *
	 *                         *
	 * * * * * * * * * * * * * */

	 $('.mtb-1').click(function(){
	 	$('.graph-panel').removeClass('graph-panel-show');
	 	$('.market-status').fadeIn(0);
	 	$('.market-list').fadeIn(0);
	 	if( page == "wire3.html")
	 		$('.my_stack').fadeIn(0);
	 	$('.mtb-2').removeClass('mobile-toggle-selected');
	 	$('.mtb-1').addClass('mobile-toggle-selected');

	 });

	 $('.mtb-2').click(function(){
	 	$('.market-status').fadeOut(0);
	 	$('.market-list').fadeOut(0);
	 	if( page == "wire3.html")
	 		$('.my_stack').fadeOut(0);
	 	$('.mtb-1').removeClass('mobile-toggle-selected');
	 	$('.mtb-2').addClass('mobile-toggle-selected');
	 	$('.graph-panel').addClass('graph-panel-show');
	 	drawGraph();
	 });

	 var resizer = function(){
	 	winWidth = $(window).width();
	 	winHeight = $(window).height();

	 	if (winWidth > 999){
	 		$('.graph-panel').removeClass('graph-panel-show');
	 		$('.market-status').fadeIn(0);
	 		$('.market-list').fadeIn(0);
	 		if( page == "wire3.html")
	 			$('.my_stack').fadeIn(0);
	 		$('.mtb-2').removeClass('mobile-toggle-selected');
	 		$('.mtb-1').addClass('mobile-toggle-selected');
	 	}
	 };

	 $(window).resize(resizer);

	});
