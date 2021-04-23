function maxSequenceOfElements(array){
    let maxElement = Number.MIN_SAFE_INTEGER;
    let maxElementCount =0;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let currentElementCount = 0;
        for (let j = i; j < array.length ; j++) {
            if (currentElement == array[j]){
                currentElementCount++;
            }else{
                break;
            }
            if (maxElementCount < currentElementCount){
                maxElementCount = currentElementCount;
                maxElement = currentElement;
            }
        }
    }
    if (maxElement == Number.MIN_SAFE_INTEGER){
        console.log(array[0]);
    }else{
        let maxSequence = [];
        for (let i = 0; i < maxElementCount; i++) {
            maxSequence.push(maxElement);
        }
        console.log(maxSequence.join(" "));
    }
}
// maxSequenceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfElements([0, 1, 1]);