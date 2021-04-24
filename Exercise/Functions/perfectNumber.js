function perfectNumber(number) {

    if (number > 0){
        if (number === getSumOfDivisors(number)){
            console.log("We have a perfect number!")
        }else{
            console.log("It's not so perfect.")
        }
    }else{
        console.log("It's not so perfect.")
    }

    function getSumOfDivisors(number) {
        let sum = 0;
        for (let i = 1; i < number-1; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
}

// perfectNumber(28);