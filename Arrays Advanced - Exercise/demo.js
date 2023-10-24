function sorting(arr) {
    let filter = [];
    let sortedNum = arr.sort((a, b) => a - b);

    while (sortedNum.length > 0) {
        let maxNum = sortedNum.pop();
        let minNum = sortedNum.shift();

        filter.push(maxNum, minNum)
    }

    console.log(filter.join(" "));


}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])