function solve(arr) {
    class Person {
        constructor(name) {
            this.name = name;
            this.number = name.length;
        }

        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`
        }
    }

    arr = arr.map(x => new Person(x))
        .forEach(person => console.log(person.print()));


}

solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);