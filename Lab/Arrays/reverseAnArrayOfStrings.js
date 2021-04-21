function reverseAnArrayOfStrings(array){
    for(let i = 0; i< array.length/2; i++){
        let swapValue = array[array.length -1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = swapValue;
    }
    console.log(array.join(" "));
}
// reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);