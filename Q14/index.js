//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_list = ["Mother", "Father", "Siblings"];
let message = "You are invited to our Dinner Party";
for (let i = 0; i < guest_list.length; i++) {
    console.log(guest_list[i] + " " + message);
}
export {};
