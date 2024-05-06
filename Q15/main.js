//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guests_list = ["Mother", "Father", "Siblings"];
let message = "You are invited to our Dinner Party";
for (let i = 0; i < guests_list.length; i++) {
    console.log(guests_list[i] + " " + message);
}
;
let absent_guest = "Siblings";
let new_guest = "Siblings_in_law";
console.log(`\nNote:
${absent_guest} are not comming for the Dinner\n`);
guests_list[2] = new_guest;
for (let i = 0; i < guests_list.length; i++) {
    console.log(guests_list[i] + " " + message);
    ;
}
export {};
