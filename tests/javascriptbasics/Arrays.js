
// slicing
// =======

const firstNames = ['Parthiban', 'Sarathi', 'Tamil', 'Santhosh'];
const slicedFirstNames = firstNames.slice(0, 2); // extract from 0 till 1 index and 2 excluded.
console.log(slicedFirstNames);
console.log(firstNames);          // Original array has not modifed


// splicing
// ========

const lastNames = ['Subburam', 'Subburam', 'Arasan', 'Kumar'];
const splicedLastNames = lastNames.splice(0, 2, 'Vetri', 'Murugan'); // 2 elements removed which index starts at 0.
console.log('Spliced arrays is: ', splicedLastNames);    // print the array which has removed values.
console.log(lastNames);            // original array has modified

//=============================================================================================================================

// filter, map, reduce 
// ===================

let numbers = [1, 2, 3, 8, 10, 15, 17, 7, 9];
let filteredNumbers = numbers.filter(number => number > 5);
console.log('Filtered numbers are: ', filteredNumbers);

let map = ['Parthiban', 'sarathi', 'Santhosh'];
let mappedNumbers = map.filter(name => name.charAt(0) !== name.charAt(0).toUpperCase())
    .map(value => value.charAt(0).toUpperCase() + value.slice(1));
console.log('Names with uppercase first letter: ', mappedNumbers);

var marks = [1, 2, 3, 8, 10, 15, 17, 7, 9];
var totalValue = marks.reduce((sum, value) => sum + value, 0);
console.log('Total values are: ', totalValue);


// for each (only perform the action and not returns any data)
// ===========================================================

const fruits = ['apple', 'banana', 'guava', 'grapes'];
fruits.forEach((fruit, index) => {
    console.log(`index of ${fruit} is ${index}`)
});

var marks = [1, 2, 3, 8, 10, 15, 17, 7, 9];
let totalmarks = 0;
marks.forEach(price => {
    totalmarks += price;
});
console.log('Total marks are: ', totalmarks);