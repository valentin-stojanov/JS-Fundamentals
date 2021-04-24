function factorialDivision(x, y){
    let factorialX = getFactorial(x);
    let factorialY = getFactorial(y);

    console.log((factorialX/factorialY).toFixed(2));

    function getFactorial(x) {
        let result = 1;
        if (x > 0) {
            for (let i = 1; i <= x; i++) {
                result *= i;
            }
        }
        return result;
    }
}
// factorialDivision(6, 2);