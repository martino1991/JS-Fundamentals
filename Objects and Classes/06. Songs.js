// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. 
//Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter). 
//If the value of the last element is "all", print the names of all the songs.

function solve (arr) {
    let songList = [];
    let songNumbers = arr.shift();
    let songType = arr.pop();

    class Song {
        constructor (type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0 ; i < songNumbers ; i++) {
        let [type, name, time] = arr[i].split("_");
        let songa = new Song(type, name, time);
        songList.push(songa);
    }
    if(songType == "all") {
        songList.forEach((i)=> console.log(i.name));
    } else {
        let filtered = songList.filter((i)=> i.type == songType);
        filtered.forEach((i) => console.log(i.name));
    }
}
solve ([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
    