// Write a program that receives a number n.  For all numbers in the range [1…n] print the number and if it is special or not (True / False).
// •	A number is special when its sum of digits is 5, 7 or 11.

// function solve(number) {
//     for (let i = 16; i <= number; i++) {
//       let currentNum = i; // копираме стойността на i в нова променлива, защото ще трябва да я променяме
//       let sumOfDigits= 0;
//       while (currentNum > 0) { // въртим този цикъл докато не стигнем 0, т.е. обходили сме всички цифри на числото
//         sumOfDigits += currentNum % 10; // към sumOfDigits добавяме стойността на последната цифра, напр. от 345 ще вземем 5
//         currentNum = Math.trunc(currentNum / 10); // премахваме последната цифра от числото, напр. 345 ще стане 34
//       }
  
//       const isSpecialNumber = sumOfDigits == 5 || sumOfDigits == 7 || sumOfDigits == 11;
//       // използваме const, защото isSpecialNumber няма да бъде променяно
//       console.log(isSpecialNumber ? `${i} -> True` : `${i} -> False`);
//     }
//   }
// solve(200)

function special(num) {
    for (let i = 1; i <= num; i++) {
        let curNum = i;
        let sum = 0;

        while (curNum > 0) {
            sum += curNum % 10;
            curNum = Math.trunc(curNum / 10)
        }

        const isSpecial = sum == 5 || sum == 7 || sum == 11;
        console.log(isSpecial ? `${i} -> True` : `${i} -> False`);
    }
}
special (15)