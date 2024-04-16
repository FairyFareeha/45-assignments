let personName = "Muhammad Mustafa";
let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();
let titleCase = personName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
if (personName !== null && personName !== " ") {
    console.log(`Hello ${personName},Here is your name in:
    LowerCase : ${lowerCase}
    UpperCase : ${upperCase}
    TitleCase : ${titleCase}`);
}
else {
    console.log("Please Fill Your Name...!!!");
}
export {};
