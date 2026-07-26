const userInfo = {

    firstName: 'Parthiban',
    lastName: 'Subburam',
    Profession: 'IT Engineer',
    company: () => {
        return 'EPAM';
    }
}
userInfo.location = 'Chennai';          // Add the element
let firstName = userInfo.firstName;     // fetch the element
firstName = 'Sarathi';
userInfo.firstName = 'Sarathi';         // modify the element
delete userInfo.Profession;             // remove the element
console.log(firstName);
console.log(userInfo.company());
console.log(userInfo);


// fetch elements via foreach and for (We cannot directly use foreach with objects)
// ===================================================================================

Object.entries(userInfo).forEach(([key, value]) => {
    console.log(`Key is ${key} and value is ${value}`);
});

Object.keys(userInfo).forEach((key) => {
    console.log(`Key is ${key}`);
});

Object.values(userInfo).forEach((value) => {
    console.log(`value is ${value}`);
});

for (const key in userInfo) {
    let value = userInfo[key];
    console.log(`Key is ${key} and value is ${value}`);
};

