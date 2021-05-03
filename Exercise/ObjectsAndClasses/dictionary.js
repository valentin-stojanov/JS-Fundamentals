function dictionary(input){
    let dictionary ={};

    for (let line of input) {
        let tuple = Object.entries(JSON.parse(line));
        let term = tuple[0][0];
        let definition = tuple[0][1];
        dictionary[term] = definition;
    }
    Object.entries(dictionary)
        .sort((a,b) => a[0].localeCompare(b[0]))
        .forEach(e => console.log(`Term: ${e[0]} => Definition: ${e[1]}`));
}
dictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);