function charactersInRange(startChar, endChar) {

    let arr = charactersArray(startChar, endChar);

    console.log(arr.join(" "));

    function charactersArray(startChar, endChar) {
        let array = [];
        let start = startChar.charCodeAt(0);
        let end = endChar.charCodeAt(0);

        if (start > end){
            let swappedValues = swap(start, end);
           start = swappedValues[0];
           end = swappedValues[1];
        }

        for (let i = start + 1; i < end; i++) {
            array.push(String.fromCharCode(i));
        }
        return array;

        function swap(start, end){
            let swapValueArr = [];
            start += end;//array[j] - start
            end = start - end;//array[j + 1] - end
            start -= end;
            swapValueArr.push(start);
            swapValueArr.push(end);
            return swapValueArr;
        }
    }
}

charactersInRange('C', '#');