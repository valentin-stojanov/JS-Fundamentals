function solveHouseParty(input){
    let guestsList = [];

    for (const token of input) {
        let name = token.split(" ")[0];

        if(token.includes("not")){
            let indexToRemove = guestsList.indexOf(name);
            if(indexToRemove === -1){
                console.log(`${name} is not in the list!`);
            }else{
                guestsList.splice(indexToRemove,1);
            }
        }else{
            if(!guestsList.includes(name)){
                guestsList.push(name);
            }else{
                console.log(`${name} is already in the list!`);
            }
        }
    }
    console.log(guestsList.join("\n"));
}
// solveHouseParty(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']
// );
// solveHouseParty(['Tom is going!',
// 'Annie is going!',
// 'Tom is going!',
// 'Garry is going!',
// 'Jerry is going!']
// )