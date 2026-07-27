
// Basic operations using objects
// ==============================

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


// Converting objects keys into array and set
// ==========================================

// Converting an object to array
// =============================

const keys = Object.keys(userInfo);           // keys and values return as array
const values = Object.values(userInfo);
const pairs = Object.entries(userInfo);
console.log(keys);
console.log(values);
console.log(pairs);

// Converting as Object to Set
// ===========================
const keysSet = new Set(Object.keys(userInfo));
const valuesSet = new Set(Object.values(userInfo));
const pairsSet = new Set(Object.entries(userInfo));
console.log(keysSet);
console.log(valuesSet);
console.log(pairsSet);
