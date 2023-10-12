// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"

function passwordValidator(pass) {
    let isValidLength = checkPassLength(pass);
    let isOnlyLetterDigits = checkonlyLettersDigits(pass);
    let isMinimum2Digits = chekMin2Digits(pass);

    if (isMinimum2Digits && isOnlyLetterDigits && isValidLength) {

        console.log("Password is valid");
    }

    function checkPassLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }
    function checkonlyLettersDigits(pass) {
        for (let element of pass) {
            let asciiCode = element.charCodeAt(0);
            if (
                !((asciiCode >= 48 && asciiCode <= 57) ||
                    (asciiCode >= 65 && asciiCode <= 90) ||
                    (asciiCode >= 97 && asciiCode <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            } 
        }
        
        return true;
    }
    function chekMin2Digits(pass) {
        let digits = 0;

        for (let curChar of pass) {
            let asciiCode = curChar.charCodeAt(0);

            if (asciiCode >= 48 && asciiCode <= 57) {
                digits++;
            }
        }
        if (digits < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {

            return true;
        }
    }
}
passwordValidator('Pa$s$s')