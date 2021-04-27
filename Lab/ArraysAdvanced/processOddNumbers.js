function processOddNumbers(array) {

    let fiteredPositions = array.filter(isOddIndex);
    let doubled = fiteredPositions.map(x => x * 2);

    console.log(doubled.reverse().join(" "));

    function isOddIndex(value, index){
        return (index % 2) != 0;
    }
}
// processOddNumbers([10, 15, 20, 25]);