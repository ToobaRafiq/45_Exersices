import { Console } from "console";

//Equality and Inequality  Test
console.log("Equality with strings: " , "Apple"=== "Apple");
//Equality and Inequality Test
console.log("Inequality with string: " , ("Apple" as string) != "orange");

//Tests using the lower case function.
console.log("lowercase function test: " , "HELLO".toLowerCase() === "hello");

//Numerical tests involving equality.
console.log("Equality with numbers: " , 26 === 26);
//Numerical tests involving inequality.
console.log("Inequality with numbers: " , (26 as number)!= 35);

//greater than test.
console.log("Greater than test: " , 10 > 5);
// less than test.
console.log("less than test: " , 10 < 5);

// greater than or equal to.
console.log("Greater than or equal to: " , 10 >= 10);
//less than or equal to.
console.log("less than or equal to: " , 5 <= 10);

// Tests using "and" operators Test.
console.log("And operators Test: " , 5===5 && 10>5);
// Tests using "or" operators Test.
console.log("Or operators Test: " , 5===5 || false);

//Test whether an item is in a array.
const fruits : string[] = ['Nashpati' ,'Banana', 'Apple'];
console.log('Test "Nashpati" in an array: ' , fruits.includes("Nashpati"));
//Test whether an item is not in a array.
console.log('Test "Amrood" is not an array: ' , !fruits.includes('Amrood'));











