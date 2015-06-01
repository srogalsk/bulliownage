===============================================================================
                     CSE134B The Thomas Powell Experience
                               Bulliownage - HW4
===============================================================================

1. Start from index.html
2. Signup to create a New Account
3. Login with your new account
4. Navigate to My Gold or any other page
5. Click the "+" symbol to add new items
6. On My Gold, Silver, or plat, you can see and click your new item to edit or delete it
7. The graphs for total value updates every 24 hours. You will only have one point initially.

# # # # # # # # # # # # # # # 
#  Steps to Building App    #
# # # # # # # # # # # # # # #

Overall: We split the tasks into two categories. 
1) The first category was the CRUD related tasks which involved being able to create accounts, add and update items in the database, delete items, and other related tasks. 
	a) Parse: The first task involved setting up the database which implemented using Parse. The reason why we chose Parse was because a couple members of our group already had some experience using the tool. This would decrease the time required to learn how to use the tool which also has a fairly low learning curve. We also did some reasearch and found that there was a lot of documentation for Parse.

	b) Index, Signup, Login: The next task required setting up users and the signup/login feature. This was the next focus because we needed user IDs so that we could associate bullion with each user when adding to the database. We fetched the signup and login page that was created by our group in the previous homework and formatted the visuals to match that of the wireframe provided for us. Then, we added calls to the Parse database so that we could properly save and associate each user with a token or unique ID.

	c) Wire5: After implementing signin, the item page was worked on. We worked on being able to add new coins into the database and saving the data that was on the form. This was not a particularly difficult task but also involved creating a Class in Parse. This was also the step in which we began to discuss what each value represented and how we would get the information for each value whether it be from user input or from an online source.

	d) Wire3, Wire4: The read was the next to take priority. We allowed the Wire 3 page to fetch the list of items associated with a user in the database. After clicking an item, the Wire4 page would be loaded with all the information associated with the item. The main difficulty we had with this part was figuring out how to allow the Wire4 page to get information about which coin was selected in Wire3. The implementation we chose involved passing the information through the URL. To add some level of security to this feature, in Wire4 we check whether the coin data being loaded actually belongs to the current user.

	e) Wire4: Updating an existing coin's information was one of the final goals for the CRUD. We simply allowed elements of Wire4 to be editable when it is populated with data. After editing, the user could submit the changes which would use Parse's API to update the existing values in the database.

2) The second category involved pulling data and updating the graphs with the data.
	a) Wire3: Since this was done in parallel with part 1a., we did not yet have a database. We first aimed to fetch data from Quandl. To acheive consistency, the data was all fetched from the London Fixings page. One of the first difficulties we ran into was realizing that quandl limits the number of connections. This was an easy fix since we just created a free account to used for all our data calls.

	b) Wire2: After populating Wire3 with the gold data, we used a similar approach to populate Wire2 data. This was not difficult since it mainly required copy/pasting code over.

	c) Wire3: Since the database functionality was not yet complete, we aimed to populate all the numerical values that only required stock data. One set of the previous month of data values is pulled from Quandl. The Daily, Overall, and Daily Change are all calculated using the data. As a note, the Overall is the overall percentage change over the datapoints on the graph. The Daily change is the physical change in dollars from the previous day. The Daily value is the percentage change from the previous day. Although Quandl provides this information, calculating the values reduces the number of required API calls. The Bid and Ask price was found using a section of code that another student generously provided to the class. 

	d) Wire2: Again, the same approach used in Wire3 was applied to Wire2. THe Bid, ask, Change prices were appropriately updated in the same was as in Wire3. Also, although there were APIs for the Market hours, we manually calculated the status of the market and the time until open/close of the market.

	e) BOTTLENECK: We reached a bottleneck at this point. Since the majority of the remaining features required the database, there was not much more to be done for this category for the time being. This lasted approximately 5 days. In that time, I took the time to make minor updates around the site including having the refresh button work poperly, changing minor styling that was buggy, adding the search bar feature, and updating the names of the graph axis. I also took the Professor's suggestion in displaying certain items in a dropdown for the create items page depending on what metal is selected. 

	f) When the database was finally working, the remaining graph features and numerical calculations were completed. This required fetching the bullion items from Parse and utilizing the current maret price and item details to calculate the values. 




# # # # # # # # # # # # # # # 
#   Cross-Platform Issues   #
# # # # # # # # # # # # # # #
- One feature did not work on Chrome (Version 43.0.2357.65 (64-bit)) on Ubuntu 14.04. When logging in, a Parse command used to initialize some data in the database did not properly so the object was never created. We tested this on Firefox on Ubuntu as well as IE, Chrome, and Firefox in Windows and the feature worked properly.

- When editing or adding a new item in Wire4/Wire5, the Date Selector did not work in Firefox and IE so the date needs to be manually entered. 




# # # # # # # # # # # # # # # 
#       Other Concerns      #
# # # # # # # # # # # # # # #	
- Sometimes, fetching data from Quandl can take much longer than expected and would require up to 5-10 seconds to fetch the page and load the data. This can drastically impact the user experience and we should look into possible fixes/patches for the next homework.

- If we are in offline mode, much of the pages will not load properly. We wanted to but did not have time to send a message to the user when this is the case. This is also a feature we will work on for the next homework.

- We decided to have a number of popular coins and bullion load up as options for the user. This was our initial goal since the app is geared towards mainly novice users who may not have knowledge of some of the details of an item. Our app solves that problem by pre-populating the page. The problem with this is that users may have coins that they cannot add to the inventory. As a feature for homework 5, we will implement this so that users can either select from our list (for novice/typical users) or enter their own information from scratch (for more advanced users).

- In order to reduce the size of our site, we are merging wire3b and wire 3c into a single wire3 and adding different calls depending on the page we are on. This should reduce our code by a few hundred lines.


# # # # # # # # # # # # # # # 
#     Validation Issues     #
# # # # # # # # # # # # # # #	
- Other than the existing CSS validation errors from the previous group that implemented the wireframe, everything validates properly.




# # # # # # # # # # # # # # # 
#    Implementation Tech    #
# # # # # # # # # # # # # # #
- We used Parse as our database for the reasons stated in "Steps to Building the App 1a".

- We also continued to use Chart.js since it was already somewhat integrated into the app. It also had a reasonable amount of support for our purposes.

- To implement all our features, we almost completely utilized vanilla javascript and html5. The only other tool we used was some basic JQuery when it was more convenient to use. We chose to do this since we wanted to keep the size of our code smaller and we also wanted to practice javascript for the final :).


# # # # # # # # # # # # # # # 
#     Useful Information    #
# # # # # # # # # # # # # # #
- As useful information, we were short one man for this assignment. Although he showed up to one meeting, he did not contribute much if any tangible contributions to the assignment.

# # # # # # # # # # # # # # # 
#        Thank you!         #
# # # # # # # # # # # # # # #
