// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 

function oddAndEvenSum(num) {

    let numAsString = String(num);

    let [odd, even] = calcEvenOddSum(numAsString)


    console.log(`Odd sum = ${odd}, Even sum = ${even}`);


    function calcEvenOddSum(string) {
        let odd = 0;
        let even = 0;

        for (let char of string) {
            let digit = Number(char);

            if (digit % 2 == 0) {
                even += digit;
            } else {
                odd += digit;
            }
        }

        return [odd, even];
    }
}
oddAndEvenSum(1000435)
