// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"
function object(JSONSting) {

    let pars = JSON.parse(JSONSting);
    let obj = Object.entries(pars);

    for (let key of obj) {
        console.log(`${key[0]}: ${key[1]}`);
    }

}
object ('{"name": "George", "age": 40, "town": "Sofia"}')
