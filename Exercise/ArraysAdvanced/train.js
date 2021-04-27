function solveTrain(input) {
    let wagons = input
        .shift()
        .split(" ")
        .map(Number);
    let capacity = Number(input.shift());

    for (let command of input) {
        if (command.includes("Add")) {
            let newWagon = Number(command.split(" ")[1]);
            wagons.push(newWagon);
        } else {
            let n = Number(command);
            for (let i = 0; i < wagons.length; i++) {
                let element = wagons[i];
                if ((element + n) <= capacity) {
                    wagons[i] += n;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}

// solveTrain(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75']
// );