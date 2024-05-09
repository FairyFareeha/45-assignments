//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList: string[] = ["Mother", "Father", "Siblings"];
let message: string = "You are invited to our Dinner Party";
for (let i = 0; i < guestList.length; i++) {
  console.log(guestList[i] + " " + message);
}
let absent_guest: string = "Siblings";
let new_guest: string = "Siblings_in_law";
console.log(`\nNote:
${absent_guest} are not comming for the Dinner\n`);
guestList[2] = new_guest;

for (let i = 0; i < guestList.length; i++) {
  console.log(guestList[i] + " " + message);
}
console.log(`\nHI All...We have found a BIGGER Dinner Table!\n`);
let newGuest1 = guestList.unshift("Khala");
let newGuest2 = guestList.splice(1,0,"Mamoo");
let newGuest3 = guestList.push("Chicha");

for(let i = 0 ; i < guestList.length;i++) {
    console.log(guestList[i] + " " + message);
    


}
