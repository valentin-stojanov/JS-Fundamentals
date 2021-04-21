function arrayRotation(array, numberOfRotation){
    for (let i = 0; i < numberOfRotation; i++) {
        array.push(array.shift());
    }
    console.log(array.join(" "));
}
// arrayRotation([32, 21, 61, 1], 4);