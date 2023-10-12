// // A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, 
// // which receives an array of positive integers and checks if each integer is a palindrome or not.
// // Output
// // •	If the current integer is a palindrome, print: "true"
// // •	Otherwise, print: "false"


function palindrome(arr) {

    for (let num of arr) {
        let isPalindrom = chekIsPalindrom(num);

        console.log(isPalindrom);
    }

    function chekIsPalindrom(num) {
        let numString = String(num);
        let reversedNumStr = "";

        for (let i = numString.length - 1; i >= 0; i--) {
            let curChar = numString[i];
            reversedNumStr += curChar;
        }

        let isPalindrom = numString == reversedNumStr;
        return isPalindrom;
    }
}
palindrome ([123,323,421,121]);

//////////// //////////////////// /////////////////////    КРАТЪК ВАРЯНТ     ///////////////////////////// ///////////////////////// ////////////////////////

function palindrome (arr) {
    for (let num of arr) {
        let reversedNumStr = num.toString().split("").reverse().join("");

        console.log(num==reversedNumStr);
    }
}

palindrome ([123,323,421,121]);

