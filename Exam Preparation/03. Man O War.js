// The pirates encounter a huge Man-O-War at sea. 
// Create a program that tracks the battle and either chooses a winner or prints a stalemate. On the first line, you will receive the status of the pirate ship, 
// which is a string representing integer sections separated by ">". On the second line, you will receive the same type of status, but for the warship: 
// "{section1}>{section2}>{section3}… {sectionn}"
// On the third line, you will receive the maximum health capacity a section of the ship can reach. 
// The following lines represent commands until "Retire":
// •	"Fire {index} {damage}" - the pirate ship attacks the warship with the given damage at that section. Check if the index is valid and if not, skip the command. 
// If the section breaks (health <= 0) the warship sinks, print the following and stop the program: "You won! The enemy ship has sunken."
// •	"Defend {startIndex} {endIndex} {damage}" - the warship attacks the pirate ship with the given damage at that range (indexes are inclusive). 
// Check if both indexes are valid and if not, skip the command. If the section breaks (health <= 0) the pirate ship sinks, print the following and stop the program:
// "You lost! The pirate ship has sunken."
// •	"Repair {index} {health}" - the crew repairs a section of the pirate ship with the given health. Check if the index is valid and if not, 
// skip the command. The health of the section cannot exceed the maximum health capacity.
// •	"Status" - prints the count of all sections of the pirate ship that need repair soon, which are all sections that are lower than 20% of the maximum health capacity. 
// Print the following:
// "{count} sections need repair."
// In the end, if a stalemate occurs, print the status of both ships, which is the sum of their individual sections, in the following format:
// "Pirate ship status: {pirateShipSum}
// Warship status: {warshipSum}"
// Input
// •	On the 1st line, you are going to receive the status of the pirate ship (integers separated by '>')
// •	On the 2nd line, you are going to receive the status of the warship
// •	On the 3rd line, you will receive the maximum health a section of a ship can reach.
// •	On the following lines, until "Retire", you will be receiving commands.
// Output
// •	Print the output in the format described above.
// Constraints
// •	The section numbers will be integers in the range [1….1000]
// •	The indexes will be integers [-200….200]
// •	The damage will be an integer in the range [1….1000]
// •	The health will be an integer in the range [1….1000]

function manOWar(arr) {

    let pirateShip = arr.shift().split(">").map(Number);
    let warShip = arr.shift().split(">").map(Number);
    let maxHealth = arr.shift();
    let minHealth = maxHealth * 0.20;

    for (let command of arr) {
        let tokens = command.split(" ");
        let action = tokens.shift();

        if (action == "Retire") {
            break;
        } else if (action == "Fire") {
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);

            if (index > 0 && index <= warShip.length) {
                warShip[index] -= damage;

                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }

        } else if (action == "Defend") {
            let starIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (starIndex < 0 || starIndex >= pirateShip.length || endIndex < 0 || endIndex >= pirateShip.length) {
                continue;
            }
            for (let i = starIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;

                if (pirateShip[i] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }
            }
        } else if (action == "Repair") {
            let index = Number(tokens[0]);
            let health = Number(tokens[1]);

            if (index > 0 && index <= pirateShip.length) {
                pirateShip[index] += health;

                if (pirateShip[index] > maxHealth) {
                    maxHealth = pirateShip[index];
                }
            } else if (action == "Status") {

            }

        } else if (action == "Status") {
            let critical = pirateShip.filter(x => x < minHealth);
            console.log(`${critical.length} sections need repair.`);
        }
    }
    let statusPirate = 0;
    let statusWar = 0;

    for (let x of pirateShip) {
        statusPirate += x;
    }
    for (let x of warShip) {
        statusWar += x;
    }

    console.log(`Pirate ship status: ${statusPirate}`);
    console.log(`Warship status: ${statusWar}`);

}


manOWar (["12>13>11>20>66",
        "12>22>33>44>55>32>18",
        "70",
        "Fire 2 11",
        "Fire 8 100",
        "Defend 3 6 11",
        "Defend 0 3 5",
        "Repair 1 33",
        "Status",
        "Retire"])
