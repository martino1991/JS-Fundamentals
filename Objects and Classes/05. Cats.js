// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input. 
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.
function solve(catsAsStrings) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meoaw() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let catsAsString of catsAsStrings) {
        let tokens = catsAsString.split(` `);
        let name = tokens[0];
        let age = Number(tokens[1]);

        let cat = new Cat(name, age);
        cat.meoaw();
    }
}
solve(['Candy 1', 'Poppy 3', 'Nyx 2'])