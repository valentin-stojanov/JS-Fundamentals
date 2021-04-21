function sumEvenNumber(array) {
    let evenSum = 0;
    for (let i = 0; i <= array.length; i++) {
        let currentNumber = Number(array[i]);
        if (currentNumber % 2 == 0) {
            evenSum += currentNumber;
        }
    }
    console.log(evenSum);
}
// sumEvenNumber(['2','4','6','8','10']);