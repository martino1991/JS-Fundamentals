// You will receive 3 parameters (string, char, string).
// The first string will be a word with a missing char replaced with an underscore '_'.
// You have to replace the missing character (underscore) of the first string with the character passed as 
// the second parameter and compare the result with the second string.
// If they are equals, you should print "Matched", otherwise print "Not Matched".
 
function solve(word, symbol, matc) {
    let rezult = "";

    for (let index = 0; index < word.length; index++) {
        if (word[index] == "_") {
            rezult += symbol;
        } else {
            rezult += word[index];
        }
    }

    if (rezult == matc) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
solve ('Str_ng', 'I', 'Strong');
solve ('Str_ng', 'i', 'String');
Number.MAX_SAFE_INTEGER