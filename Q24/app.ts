//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

import { log } from "console";

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

console.log("Equality test with strings : " , "Apple" === 'Apple');
console.log("Inequality test with strings : " , ("Apple" as string) != 'orange');

console.log("Equality test with lower case function : " , "HELLO".toLowerCase() === 'hello');

console.log("Equality test with numerals :  ", 26 === 26);
console.log("Inequality test with numerals : " , (25 as number) != 26);
console.log("Greater than test : ", 10 > 5);
console.log("Less than test : " , 5 < 10);
console.log("Greater than or equal to test : " , 10 >= 10);
console.log("Less than or equal to test : " , 5 <= 5);

console.log("And operator test : " , 5 === 5 && 10 > 5 );
console.log("Or operator test : ", 5 === 5 || 5 < 2);

const brands: string[] = ["Khaddi","J.","Maria B"];
console.log("Item in an arrray test :  " , brands.includes("Maria B"));
console.log("Item is not in an array test : ", !brands.includes("Sana Safinaz"));



















