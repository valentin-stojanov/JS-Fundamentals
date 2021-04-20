function sumOddNumbers(n) {
    let oddCounter = 1;
    // let sum = 0;
    let i = 1;
    while (oddCounter <= n) {
        if (i % 2 != 0) {
            oddCounter++;
            // sum += i;
            console.log(i);
        }
        i++;
    }
    // console.log(`Sum: ${sum}`);
    console.log(`Sum: ${n*n}`);
}
// sumOddNumbers(100);