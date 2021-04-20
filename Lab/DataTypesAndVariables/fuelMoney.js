function fuelMoney(distance, passengers, price){
    let needetFuel = (distance / 100) * 7;
    needetFuel += passengers * 0.100;
    let moneyForFuel = needetFuel * price;
    console.log(`Needed money for that trip is ${moneyForFuel}lv.`);
}
// fuelMoney(90, 14, 2.88);