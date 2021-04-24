function signCheck(n1, n2, n3) {
    let counter = countNegativeSign(n1) +
        countNegativeSign(n2) +
        countNegativeSign(n3);

    if (counter % 2 == 0 || n1 == 0 || n2 == 0 || n3 == 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

    function countNegativeSign(n) {
        return n < 0 ? 1 : 0;
    }
}

// signCheck(-1, 0, 1);