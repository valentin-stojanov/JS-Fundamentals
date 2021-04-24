function matrix(number){

    for (let i = 0; i < number; i++) {
        console.log(lineWithDigits(number).join(" "));
    }

    function lineWithDigits(number) {
        let array=[];
        for (let i = 0; i < number; i++) {
            array.push(number);
        }
        return array;
    }
}
// matrix(7);