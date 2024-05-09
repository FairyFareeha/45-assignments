//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList: string[] = ["Mother", "Father", "Siblings"];
let message: string = "You are invited to our Dinner Party";
function forloop() {
  for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + " " + message);
  }
}
forloop()

let absent_guest: string = "Siblings";
let new_guest: string = "Siblings_in_law";

console.log(`\nNote:
${absent_guest} are not comming for Dinner\n`);

guestList[2] = new_guest;

forloop()

console.log(`\nHI ALL...We have found a BIGGER Dinner Table\n`);

let newGuest1 = guestList.unshift("Khala");
let newGuest2 = guestList.splice(1, 0, "Mamoo");
let newGuest3 = guestList.push("Chicha");

forloop()

console.log(guestList);

console.log(
  `\nWe are  extreamly sorry that we cannot arrange a big table on last moments...We can invite two people only for Dinner\n`
);

while (guestList.length >= 3) {
  let removedGuest4 = guestList.pop();
  console.log(
    `Extremely Sorry ${removedGuest4} , We cannot invite yoy for Dinner`
  );
}

for (let i = 0; i < guestList.length; i++) {
  console.log(guestList[i] + " " + "you are still invited for Dinner");
}

let removeGuest5 = guestList.splice(0, 2);

console.log(guestList);
