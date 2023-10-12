// Write a program, which prints the language, that a given country speaks. You can receive only the following 
// combinations: 
// • English is spoken in England and USA;
// • Spanish is spoken in Spain, Argentina, and Mexico;
// • For the others, we should print "unknown";
// Input
// You will receive a single country name.
// Output
// Print the language, which the country speaks, or if it is unknown for your program, print "unknown".

function solve(country) {
    if (country == "USA" || country == "England") {
        console.log("English");
    } else if (country == "Spain" || country == "Argentina" || country == "Mexico") {
        console.log("Spanish");
    } else {
        console.log("unknown");
    }
}
solve ("USA");
solve ("Bulgaria");
solve ("Spain")

// // // // // // // // // // // // // // // // // // ИЛИ   

function solve(country) {
    switch (country){
        case "USA":
        case "England":
            console.log("English");
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;
    }
}
solve ("USA");
solve ("Bulgaria");
solve ("Spain")