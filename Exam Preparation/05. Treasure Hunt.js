// Create a program that manages the state of the treasure chest along the way. On the first line, 
// you will receive the initial loot of the treasure chest, which is a string of items separated by a "|".
// "{loot1}|{loot2}|{loot3} … {lootn}"
// The following lines represent commands until "Yohoho!" which ends the treasure hunt:
// •	"Loot {item1} {item2}…{itemn}":
// o	Pick up treasure loot along the way. Insert the items at the beginning of the chest. 
// o	If an item is already contained, don't insert it.
// •	"Drop {index}":
// o	Remove the loot at the given position and add it at the end of the treasure chest. 
// o	If the index is invalid, skip the command.
// •	"Steal {count}":
// o	Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are. 
// o	Print the stolen items separated by ", ":
// "{item1}, {item2}, {item3} … {itemn}"
// In the end, output the average treasure gain, which is the sum of all treasure items length divided by the count of all items inside the chest formatted to the second decimal point:
// "Average treasure gain: {averageGain} pirate credits."
// If the chest is empty, print the following message:
// "Failed treasure hunt."
// Input
// •	On the 1st line, you are going to receive the initial treasure chest (loot separated by "|")
// •	On the following lines, until "Yohoho!", you will be receiving commands.
// Output
// •	Print the output in the format described above.
// Constraints
// •	The loot items will be strings containing any ASCII code.
// •	The indexes will be integers in the range [-200…200]
// •	The count will be an integer in the range [1….100]


function treasureHunt(arr) {
    let loot = arr.shift().split("|");
    let command = arr.shift();

    while (command != "Yohoho!") {
        let tokens = command.split(" ")
        let action = tokens.shift();

        if (action == "Loot") {
            tokens
            .filter(item => !loot.includes(item))
            .forEach(item => loot.unshift(item));

        } else if (action == "Drop") {
            let index = Number(tokens.shift());

            if (index >= 0 && index < loot.length) {
                let removedItem = loot.splice(index, 1).shift();
                loot.push(removedItem);
            }
        } else if (action == "Steal") {
            let stealIndex = Number(tokens.shift());
            let removedItems = loot.splice(-stealIndex);
            console.log(removedItems.join(", "));
        }
        command = arr.shift()
    }
    if (loot.length == 0) {
        console.log("Failed treasure hunt.");
    } else {
        let totalGain = 0;

        for (let item of loot) {
            totalGain += item.length;
        }

        let averageGain = totalGain / loot.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);

    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
