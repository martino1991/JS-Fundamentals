// Write a function that receives 3 parameters, sets them to an object, and returns that object.
// The input comes as 3 separate strings in the following order: firstName, lastName, age.

function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    };

    return person;
}
let rezult = personInfo("Peter", "Pan", 20);
console.log(rezult);

////////////// ili ///////////////

// function personInfo(firstName, lastName, age) {
//     let person = {};
//     person.firstName = firstName;
//     person.Name = lastName;
//     person.age = age;

//     return person;
// }

// let rezult = personInfo("Peter", "Pan", 20);
// console.log(rezult);
