function distinctArray(array) {

    for (let i = 0; i < array.length; ) {
        let index = array.indexOf(array[i], i+1);
        if (index !== -1) {
            array.splice(index, 1);
        }else{
            i++;
        }
    }
    console.log(array.join(" ")) ;
}

// distinctArray([1, 5, 1, 1, 1]);