"use strict";
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Mother", "Father", "Siblings"];
let message = "You are invited to our Dinner Party";
function forloop() {
    for (let i = 0; i < guestList.length; i++) {
        console.log(guestList[i] + " " + message);
    }
}
forloop();
let absent_guest = "Siblings";
let new_guest = "Siblings_in_law";
console.log(`\nNote:
${absent_guest} are not comming for Dinner\n`);
guestList[2] = new_guest;
forloop();
console.log(`\nHI ALL...We have found a BIGGER Dinner Table\n`);
let newGuest1 = guestList.unshift("Khala");
let newGuest2 = guestList.splice(Math.floor(guestList.length / 2), 0, "Mamoo");
let newGuest3 = guestList.push("Chicha");
forloop();
console.log(guestList);
console.log(`\nWe are extremely sorry that we cannot arrange a big table on last moments..We can invite only two people for dinner\n`);
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Extremely Sorry ${removedGuest} , We cannot invite you for Dinner`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + " " + "You are still invited for Dinner");
}
let removedGuests = guestList.splice(0, 2);
console.log(guestList);
console.log(`We are inviting ${guestList.length} number of people for the Dinner`);
