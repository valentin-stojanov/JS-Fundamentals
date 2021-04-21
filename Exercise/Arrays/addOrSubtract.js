function addOrSubtract(array){
    let sumOfOriginalArray = 0;
    let sumOfModifiedArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfOriginalArray+=array[i];
        if (array[i] % 2 === 0){
            array[i] += i;
        }else{
            array[i] -= i;
        }
        sumOfModifiedArray += array[i];
    }
    console.log(array);
    console.log(sumOfOriginalArray);
    console.log(sumOfModifiedArray);
}
// addOrSubtract([-5, 11, 3, 0, 2]);