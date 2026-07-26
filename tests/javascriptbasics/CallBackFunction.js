// call back function will not return any value but only perform operation

function fetchFullName(userName) {
    console.log(`Full name is ${userName}`);
}

function clearTheExtraSpacesFromString(name, callback) {
    const formattedName = name.trim();
    callback(formattedName);
}

clearTheExtraSpacesFromString(' Parthiban Subburam ', fetchFullName);


// Types
// ========

// synchoronous callbacks
// ======================

const list = [10, 20, 30, 40, 50];
let sum = 0;
list.forEach(value => {  // arrow function inside foreach is a callback function
    sum += value;
});
console.log(sum);


// asynchronous callbacks
// ======================

function fetchName() {
    console.log('Full name is "Sarathi Subburam"');
}
setTimeout(fetchName, 2000); // greet is passed as a callback; it executes after 2000 milliseconds

console.log('Execute before timeout');
