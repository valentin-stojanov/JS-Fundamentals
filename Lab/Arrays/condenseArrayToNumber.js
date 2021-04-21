function condenseArrayToNumber(array) {
    for (let j = array.length; j > 1; j--) {
        for (let i = 0; i < j - 1; i++) {
            array[i] += array[i + 1];
        }
    }
    array.length = 1;
    console.log(array[0]);
}
// condenseArrayToNumber([2,10,3]);