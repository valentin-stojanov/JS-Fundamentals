function thePyramidOfKingDjoser(base, increment) {
    let totalStones = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let counter = 0;
    let heightCounter = 0;
    let end;

    if (base % 2 == 0) {
        totalGold = 4 * increment;// 4 blocs with height = increment.
        end = 2;
    } else {
        totalGold = increment;
        end = 1;// one bloc with height = increment.
    }

    for (let i = base; i > end; i -= 2) {
        heightCounter++;
        counter++;

        let currentStone = (i - 2) * (i - 2) * increment;
        totalStones += currentStone;

        if (counter == 5) {
            let currentLapis = (i * 4 - 4) * increment;
            totalLapis += currentLapis;
            counter = 0;
        } else {
            let curretMarble = (i * 4 - 4) * increment;
            totalMarble += curretMarble;
        }
    }

    console.log(`Stone required: ${Math.ceil(totalStones)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor((heightCounter + 1) * increment)}`);// +1 for gold layer.
}
// thePyramidOfKingDjoser(23, 0.5);