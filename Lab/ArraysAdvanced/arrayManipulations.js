function solveArrayManipulations(input) {
    let array = input
        .shift()
        .split(" ")
        .map(Number);

    while (input.length > 0) {
        let tokens = input
            .shift()
            .split(" ");
        let command = tokens[0];
        switch (command) {
            case "Add": {
                let number = Number(tokens[1]);
                array.push(number);
            }
                break;
            case "Remove": {
                let number = Number(tokens[1]);
                let elementIndex = array.indexOf(number);
                if (elementIndex !== -1) {
                    array.splice(elementIndex, 1)
                }
            }
                break;
            case "RemoveAt": {
                let indexToRemove = Number(tokens[1]);
                array.splice(indexToRemove, 1)
            }
            break;
            case "Insert":{
                let number = Number(tokens[1]);
                let index = Number(tokens[2]);
                array.splice(index, 0, number);
            }
                break;
        }
    }
    console.log(array.join(" "));
}

// solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])