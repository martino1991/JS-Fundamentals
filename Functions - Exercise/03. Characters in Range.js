// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. 
// Keep in mind that the second character code might be before the first one inside the ASCII table.

function CharactersInRange(el1, el2) {
    let code1 = el1.charCodeAt(0);
    let code2 = el2.charCodeAt(0);

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);

    printRezult(minCode, maxCode)


    function printRezult(a, b) {
        let result = [];

        for (let currentCod = a + 1; currentCod < b; currentCod++) {

            let currentChar = String.fromCharCode(currentCod);

            result.push(currentChar);
        }

        console.log(result.join(` `));
    }
}
CharactersInRange("a", "d")