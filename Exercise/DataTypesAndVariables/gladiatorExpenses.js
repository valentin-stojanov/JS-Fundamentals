function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armourePrice) {

    let helmetCount = Math.trunc(lostFightsCount / 2);
    let swordCount = Math.trunc(lostFightsCount / 3);
    let shieldCount = Math.trunc(lostFightsCount / 6);//When both his sword and helmet are broken in the same lost fight - this is every 6 lost fight (2 * 3)
    let armourCount = Math.trunc(shieldCount / 2);

    let totalExpenses = (helmetCount * helmetPrice) +
        (swordCount * swordPrice) +
        (shieldCount * shieldPrice) +
        (armourCount * armourePrice);

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
// gladiatorExpenses(23,    12.50,    21.50,    40,    200    );