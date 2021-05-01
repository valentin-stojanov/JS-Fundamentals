function solveEmployees(input){
    let employees = {};
    for (let line of input) {
        employees[line] = line.length;
    }

    Object.entries(employees).forEach(element => {
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`)
    }
    );
}
solveEmployees([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);