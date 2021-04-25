function negativePositiveNumber(array){
    let result = [];
    for (let arrayElement of array) {
        if (arrayElement <0){
            result.unshift(arrayElement);
        }else{
            result.push(arrayElement);
        }
    }
    for (let resultElement of result) {
        console.log(resultElement);
    }
}
// negativePositiveNumber([7, -2, 8, 9]);