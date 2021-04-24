function smallestNumber(n1, n2, n3) {

    console.log(compareTwoNumbers(compareTwoNumbers(n1, n2), n3));

    function compareTwoNumbers(x, y) {
        return x < y ? x : y;
    }
}

// smallestNumber(2, 5, 3);
// smallestNumber(600, 342, 123);