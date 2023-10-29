// You have initial health 100 and initial bitcoins 0. You will be given a string representing the dungeon's rooms. 
// Each room is separated with '|' (vertical bar): "room1|room2|room3…"
// Each room contains a command and a number, separated by space. The command can be:
// •	"potion"
// o	You are healed with the number in the second part. But your health cannot exceed your initial health (100).
// o	First print: "You healed for {amount} hp."
// o	After that, print your current health: "Current health: {health} hp."
// •	"chest"
// o	You've found some bitcoins, the number in the second part.
// o	Print: "You found {amount} bitcoins."
// •	In any other case, you are facing a monster, which you will fight. The second part of the room contains the attack of the monster. 
// You should remove the monster's attack from your health. 
// o	If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
// o	If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you've manage to reach: "Best room: {room}"
// If you managed to go through all the rooms in the dungeon, print on the following three lines: 
// "You've made it!",
// "Bitcoins: {bitcoins}"
// "Health: {health}"
// Input / Constraints
// You receive a string representing the dungeon's rooms, separated with '|' (vertical bar): "room1|room2|room3…".
// Output
// Print the corresponding messages described above.

function muOnline(arr) {

    let health = 100;
    let bitcoins = 0;

    let rooms = arr.split("|");


    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ");
        let action = room[0];
        let num = Number(room[1]);

        if (action == "potion") {
            if (health + num > 100) {
                num = 100 - health;
                health += num;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (action == "chest") {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);

        } else {
            health -= num;
            if (health <= 0) {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            } else {
                console.log(`You slayed ${action}.`);
            }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")