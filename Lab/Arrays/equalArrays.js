function equalArrays(firstArray, secondArray) {
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i]);
        secondArray[i] = Number(secondArray[i]);
        if (firstArray[i] != secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            sum = -1;
            break;
        } else {
            sum += firstArray[i];
        }
    }
    if(sum != -1){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
// equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])