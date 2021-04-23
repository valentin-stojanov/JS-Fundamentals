function equalSums(array) {
    let noSuchIndex = true;
    for (let i = 1; i < array.length - 1; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }
        for (let r = i + 1; r < array.length; r++) {
            rightSum += array[r];
        }
        if (leftSum == rightSum) {
            console.log(i);
            noSuchIndex = false;
        }
    }
    if (noSuchIndex && array.length > 1){
        console.log("no");
    }else if (array.length == 1){
        console.log(0);
    }
}

// equalSums([0, 0, 0, 0]);