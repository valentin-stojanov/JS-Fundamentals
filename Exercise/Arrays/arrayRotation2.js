function arrayRotation2(array, numberOfRotations) {
    for (let i = 0; i < numberOfRotations; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // let tempValue = array[j+1];
            // array[j+1] = array[j];
            // array[j] = tempValue;
            array[j] += array[j + 1];
            array[j + 1] = array[j] - array[j + 1];
            array[j] -= array[j + 1];
        }
    }
    console.log(array.join(" "));
}
// arrayRotation2([51, 47, 32, 61, 21], 2);