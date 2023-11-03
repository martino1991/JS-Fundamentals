// Write a function that receives a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"
// See the examples below.


function solve(city) {
    let keys = Object.keys(city);

    for (let key of keys) {              // ili //  for (let key in city) {            //ili//  for (let [key, value] of Object.entries(city)) {
        console.log(key, "->", city[key]);      //  console.log(key, "->", city[key]);      //   console.log (key, value);
    }                                           //  }                                       //    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}); 