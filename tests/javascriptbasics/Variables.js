// using 'let'

let a = 10;
let b = 20;
// let a = 90;   // Throw error as we cannot redeclare.

b = 100;        // reassign the value

console.log(a);
console.log(b);


// using 'var'

var firstName = "Parthiban";
var firstName = "Sarathi";
var lastName = "Subburam";

lastName = "lastName";

console.log(firstName);
console.log(lastName);


// using 'const'

const CAREER_NAME = 'Software Engineer';
CAREER_NAME = 'Telecom engineer';    // We cannot ressign the value

const CAREER_NAME = 'SDET';         // We cannot redeclare

console.log(CAREER_NAME);

