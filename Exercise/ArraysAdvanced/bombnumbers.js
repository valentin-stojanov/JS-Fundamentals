function bombNumbers(arrayNumbers, inputArr) {
    let specialNumber = inputArr[0];
    let power = inputArr[1];

    while (true) {
        let indexOfSpecialNumber = arrayNumbers.indexOf(specialNumber);
        if (indexOfSpecialNumber === -1) {
            break;
        }
        let startIndex = indexOfSpecialNumber - power;
        if (startIndex < 0) {
            startIndex = 0;
        }
        let elementsToRemove = (power * 2 + 1);
        arrayNumbers.splice(startIndex, elementsToRemove);
    }
    
    if(arrayNumbers.length>0){
    let sum = arrayNumbers.reduce((sum, element) => sum + element);
    console.log(sum);
    }else{
        console.log(0);
    }

}
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2]
// );
// bombNumbers([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
// );
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2],
//     [2, 1]
//     );