function arrays(inputArray) {
    if (inputArray.length == 1) {
        console.log(inputArray[0]);
    } else {
        let condense = [];
        while (inputArray.length > 1) {
            for (let i = 0; i < inputArray.length - 1; i++) {
                let currentElement = inputArray[i] + inputArray[i + 1];
                condense.push(currentElement);
            }
            inputArray = condense;
            condense = [];
        }
        console.log(inputArray[0]);
    }
}
arrays ([5,0,4,2,1]);
///////////////////////////////////////////////////////////////////

