//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.The text of each message should be the same, but each message should be personalized with the person’s name.
var friends_names = ["Roma", "Saima", "Afshan"];
var message = "Nice to meat you ";
for (var i = 0; i < friends_names.length; i++) {
    console.log(message + friends_names[i]);
}
