function mergeArray(firstArray, secondArray) {
    let thirdArray = [];
    for (let i = 0; i < firstArray.length; i ++) {
         if (i % 2 === 0){
             thirdArray.push(Number(firstArray[i]) + Number(secondArray[i]));
         }else{
             thirdArray.push(firstArray[i] + secondArray[i]);
         }
    }
    console.log(thirdArray.join(" - "));
}

// mergeArray(['5', '15', '23', '56', '35'],
//     ['17', '22', '87', '36', '11']
// );