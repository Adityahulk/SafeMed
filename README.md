# Safe Med
URL - https://pradhuman1.github.io/pradhuman1-SGR-2/pages/homePage
During Covid 19 pandemic it is very dangerous to buy medicines.
This website books slot for you at medical shops and ensures that a small amount of customers visit at a particular time.
# Steps To Run
`git clone https://github.com/pradhuman1/pradhuman1-SGR-2`
`run homePage.html`

# Code Structure
##Api USed
`https://my-json-server.typicode.com/pradhuman1/SafeMedData/data`
method GET
native fetch api used


##script.js

Function Definations : 
1)ShowStores : input parameter -> city name[type string]

This function does the following 

-Matches city name in the fetched data, if available then it prints all cards,if not available then it shows "Service not available".
-Validates api data.

2)removeOldData : 
This function removes all the previous cards on the website.

3)ShowBooking : input parameter -> time
This Function generates a unique customer id and Confirmes the booking.

Event Listeners : 
1)click 
Attached on body , captures events by bubbling macanism.
Also validates correct time slot.

2)keyup
Attached on class "city".
It takes the input , convert it to uppercase and calls function ShowStores.











