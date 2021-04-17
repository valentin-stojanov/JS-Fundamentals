function printAndSum(start, end) {
    let sum = (start + end) * (end - start + 1) / 2;
    let line = "";
    for (let i = start; i <= end; i++) {
        line += i + " ";
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}

