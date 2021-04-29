function convertToJSON(name, lastName, hairColor){
    let person = {
        name,
        lastName,
        hairColor
    }
    let personAsString = JSON.stringify(person);
    console.log(personAsString);//return person;
}

convertToJSON('George',
    'Jones',
    'Brown'
);