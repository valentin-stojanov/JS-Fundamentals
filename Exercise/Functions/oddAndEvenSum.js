function oddAndEvenSum(number) {
    const oddSumOfDigits = oddSum(number);
    const evenSumOfDigits = evenSum(number);
    console.log(`Odd sum = ${oddSumOfDigits}, Even sum = ${evenSumOfDigits}`);

    function oddSum(number) {
        let sum = 0;
        let numberAsString =number.toString();
        for (let i = 0; i < numberAsString.length; i++) {
            let currentDigit = Number(numberAsString.charAt(i));
            if (currentDigit % 2 != 0) {
                sum += currentDigit;
            }}
        return sum;
    }

    function evenSum(number) {
        let sum = 0;
        let numberAsString =number.toString();
        for (let i = 0; i < numberAsString.length; i++) {
            let currentDigit = Number(numberAsString.charAt(i));
            if (currentDigit % 2 == 0) {
                sum += currentDigit;
            }
        }
        return sum;
    }
}
// oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234);