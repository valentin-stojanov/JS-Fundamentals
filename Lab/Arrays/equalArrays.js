function equalArrays(firstArray, secondArray) {
    let sum = 0;
    let isEqual = true;
    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i]);
        secondArray[i] = Number(secondArray[i]);
        if (firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        } else {
            sum += firstArray[i];
        }
    }
    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
// equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])