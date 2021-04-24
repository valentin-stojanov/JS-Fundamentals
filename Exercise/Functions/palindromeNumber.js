function palindromeNumber(array) {

    for (let i = 0; i < array.length; i++) {
        console.log(isPalindromeNumber(array[i]));
    }

    function isPalindromeNumber(arrayElement) {
        let numberAsString = arrayElement.toString();
        let isPalindrome = true;
        for (let i = 0; i < numberAsString.length / 2; i++) {
            if (numberAsString[i] != numberAsString[numberAsString.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
    }
}

// palindromeNumber([123, 323, 421, 121]);
// console.log("-----")
// palindromeNumber([32,2,232,1010]);