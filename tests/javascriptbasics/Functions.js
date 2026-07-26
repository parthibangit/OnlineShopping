// function declaration

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(fullName('Parthiban', 'Subburam'));


// function expression

const findLocation = function (city) {
    return 'user location is: ' + city;
}
console.log(findLocation('Chennai'));


// arrow function

const findCompany = company => 'user company is: ' + company;    // If method takes only one parameter then no need to provide parantheses.
console.log(findCompany('EPAM'))                                 // no need to add return keyword if it has single line operation.

const findNameAndAge = (name, age) => {            // If method take more than one parameter then we need to use parantheses.
    return `Name is ${name} and age is ${age}`;
}
console.log(findNameAndAge('Parthiban', 30))

const findHobby = hobby => "Hobby is " + hobby;      // If the function perform only one operation, we can omit curly branch and return keywor
console.log(findHobby('Cricket'));
