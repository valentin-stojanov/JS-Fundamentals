function repeatString(str, n){

    console.log(repeat(str, n));

    function repeat(str, n){
        let result = '';
        for (let i = 0; i < n; i++) {
            result += str;
        }
        return result;
    }
}
repeatString('abc', 3);