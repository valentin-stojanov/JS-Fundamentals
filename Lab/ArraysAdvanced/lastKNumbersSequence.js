function lastKNumbersSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let laskK = result.slice(-k);
        let sum = 0;
        for(let j = 0; j<laskK.length; j++){
            sum+=laskK[j];
        }
        result.push(sum);
    }
    console.log(result.join(" "));
}
// lastKNumbersSequence(6, 3);