function simpleCalculator(x, y, operator) {

    console.log(calculate(x, y, operator));

    function calculate(x, y, operator) {
        let result = 0;
        switch (operator) {
            case "multiply":
                result = x * y;
                break;
            case "divide":
                result = x / y;
                break;
            case "add":
                result = x + y;
                break;
            case "subtract":
                result = x - y;
                break;
        }
        return result;
    }
}

// simpleCalculator(5, 5, "multiply");