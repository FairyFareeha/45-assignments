import { log } from "console";

let personName: string = "Muhammad Mustafa";
let lowerCase: string = personName.toLowerCase();
let upperCase: string = personName.toUpperCase();
let titleCase: string = personName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

if (personName !== null && personName !== " ") {
  console.log(`Hello ${personName},Here is your name in:
    LowerCase : ${lowerCase}
    UpperCase : ${upperCase}
    TitleCase : ${titleCase}`);
} else {
  console.log("Please Fill Your Name...!!!");
}


