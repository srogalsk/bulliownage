===============================================================================
                             CSE134B DREAM TEAM
                               COINFLIP - HW3
===============================================================================

# # # # # # # # # # # # # # # 
#      Application Use      #
# # # # # # # # # # # # # # #

Navigation:
	Start with index.html as the login/signup page. All other pages are named
	as such:

	index.html - Login/signup page with demo
	wire2.html - Home page with Total Coin Value and graphs for all coins
	wire3.html - My Gold page with details on owned gold coins
	wire4.html - Gold Item page that looks at a specific gold coin
	wire5.html - New Item page that is the mock-up for adding a new coin

	Clicking on the AG (silver) or PT (platinum) boxes on the side nav will
	simply navigate you to the AU (gold) page [wire3.html] as this mock-up
	only implements the My Gold page.

Responsive Design:
	THe high-fidelity mock switches to mobile view when the screen size 
	reaches a width of 1000px or below.


# # # # # # # # # # # # # # # 
#   Cross-Platform Issues   #
# # # # # # # # # # # # # # #

Chrome:
	We mainly developed on Chrome, so there were issues with compatibility in
	that department. 

Firefox:
	Firefox also seemed to work perfectly well with no issues. Did not note any
	major problems, if any problems at all, with that browser. The only slight
	difference that we noticed is that the dropdown selector in wire5.html was 
	styled a little bit differently in Firefox (not as nice looking as we would
	have hoped and seen in Chrome).

Safari:
	Here, the dropdown selector in wire5.html was also a little bit different, 
	although not as ugly as in Firefox. One of the major issues we bumped into,
	however, was that a lot of our SVG elements were not showing. This turned
	out to be this really annoying problem that with SVG symbols, all other 
	browsers let you call "use" before declaring the symbol EXCEPT Safari. 
	This required an insane amount of browsing through all the files and 
	doing a move of that line of code below the symbol declaration for pretty
	much every single SVG element we used. Overall, testing on Safari brought
	out the key point that some browsers will care about the order of certain
	markup while others wont. 

	Another thing we noticed is that Safari renders fonts a little bit 
	differently from all the other browsers, and especially font-size. We used
	font-size: 0 to bring some divs flush close to each other but on Safari
	that doesn't work for some strange reason, so we compensated with some
	white-space: nowrap so that our mobile toggling selectors didn't overflow.

Internet Explorer:
	
