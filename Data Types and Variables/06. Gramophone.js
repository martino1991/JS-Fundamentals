// Write a function, which as input will receive 3 parameters (strings)
// •	The first string is the name of the band
// •	The second string is the name of the album
// •	The third is holding a song name from the album
// You have to find out how many times the plate will rotate the given song from the album.
// The plate makes a full rotation every 2.5 seconds.
// The song duration in seconds is calculate by the given formula: 
//  	(albumName.length * bandName.length) * song-name.length / 2
// As output, you should print the following message:
//       `The plate was rotated {rotations} times.`
// Rotations should be rounded up.

function solve(bandName, albumName, songName) {
    let bandNameAsString = String(bandName);
    let albumNameAsString = String(albumName);
    let songNameAsString = String(songName);

    let bandNameSum = 0
    let albumNameSum = 0
    let songNameSum = 0

    let plateTime = 0
    let rotated = 0;

    for (i = 0; i < bandNameAsString.length; i++) {
        bandNameSum += 1
    }
    for (g = 0; g < albumNameAsString.length; g++) {
        albumNameSum += 1
    }
    for (k = 0; k < songNameAsString.length; k++) {
        songNameSum += 1
    }

    plateTime = ((albumNameSum * bandNameSum) * songNameSum / 2);
    rotated = plateTime / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotated)} times.`);

}
solve ('Black Sabbath', 'Paranoid', 'War Pigs');