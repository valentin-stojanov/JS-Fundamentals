function solve(arr) {

    let employees = [];
    arr.forEach(element => {
            let person = {
                name: element,
                number: element.length
            };
            employees.push(person);
        }
    );
    employees.forEach(obj => {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
    });

}

solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);