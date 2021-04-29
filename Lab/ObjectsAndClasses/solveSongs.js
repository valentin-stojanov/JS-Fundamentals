function solveSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }


    let n = input.shift();
    let command = input.pop();
    let songs =[];
    for (let i = 0; i < n; i++) {
        let [typeList, name, time] = input[i].split("_");
        let currentSong = new Song(typeList, name, time);
        songs.push(currentSong);
    }
    if (command === "all"){
        for (let song of songs) {
            console.log(song.name);
        }
    }else{
        songs.forEach(song => {
            if (command === song.typeList){
                console.log(song.name);
            }
        }
        );
    }

}

solveSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);