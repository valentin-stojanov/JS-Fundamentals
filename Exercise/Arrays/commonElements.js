function commonElements(firsArray, secondArray){
    for (let i = 0; i < firsArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firsArray[i] === secondArray[j]){
                console.log(firsArray[i]);
            }
        }
    }
}
// commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
//     ['s', 'o', 'c', 'i', 'a', 'l']
// )