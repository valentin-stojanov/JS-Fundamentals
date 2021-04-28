function searchForANumber(numberArray, input) {
    let elementsToTake = input[0];
    let elementsToDelete = input[1];
    let searchElement = input[2];

    let array = numberArray.slice(0, elementsToTake);
    array.splice(0, elementsToDelete);
    let occurences = 0;

    for (let i = 0; i < array.length; i++) {
        if(array[i] == searchElement){
            occurences++;
        }
    }

    console.log(`Number ${searchElement} occurs ${occurences} times.`);
}
// searchForANumber([5, 2, 3, 4, 1, 6],
//     [5, 2, 3]
// );