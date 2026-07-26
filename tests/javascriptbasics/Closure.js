// A closure in JavaScript is a function that remembers and accesses variables in its outer scope,
// even after that outer function has finished running. It lets inner functions keep a link to outer data.

function createCounter() {
    let count = 0; // Local variable in the outer function's scope

    return function () {
        count++; // inner function accesses the variable 'count'
        return count;
    };
}

// createCounter() returns the inner function. To get the current count, we must call the returned function.
const counter = createCounter();
console.log(counter());
console.log(counter());

