function addAndSubtract(n1, n2, n3) {

    console.log(subtractTwoNumbers(sumTwoNumbers(n1,n2), n3));

    function subtractTwoNumbers(j, k) {
        return j - k;
    }

    function sumTwoNumbers(x, y) {
        return x + y;
    }
}

// addAndSubtract(23, 6, 10);