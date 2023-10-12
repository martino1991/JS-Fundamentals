// You will be given a number that will be the distance in meters. Write a program that converts meters to kilometers formatted to the second decimal point.

function solve(meters) {
    let metToKm = meters / 1000;

    console.log(metToKm.toFixed(2));
}

solve(798);