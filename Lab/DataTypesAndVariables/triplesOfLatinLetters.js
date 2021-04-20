function triplesOfLatinletters(n){
    for(let i = 0; i < n; i++){
        
        for (let j = 0; j < n; j++) {
            
            for (let k = 0; k < n; k++){
                let firstLetter = String.fromCharCode(i+97);
                let secondLetter = String.fromCharCode(j+97);
                let thirdLetter = String.fromCharCode(k+97);
                console.log(firstLetter+secondLetter+thirdLetter);
            }
        }
    }
}
// triplesOfLatinletters(3);