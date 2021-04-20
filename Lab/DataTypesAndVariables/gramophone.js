function gramophone(band, album, song) {
    let songDuration = album.length * band.length * song.length / 2;
    const oneRotation = 2.5;
    let rotations = Math.ceil(songDuration/oneRotation);
    console.log(`The plate was rotated ${rotations} times.`);
}
// gramophone('Black Sabbath', 'Paranoid', 'War Pigs');