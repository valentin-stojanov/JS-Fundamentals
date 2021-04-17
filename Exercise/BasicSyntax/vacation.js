function vacation(numberOfPeople, typeOfGroup, dayOfWeek){
    let totalPrice = 0;

    switch (dayOfWeek){
        case "Friday":
            if (typeOfGroup == "Students"){
                if (numberOfPeople >=30){
                    totalPrice = 8.45 * numberOfPeople * (1 - 0.15);
                }else {
                    totalPrice = 8.45 * numberOfPeople;
                }
            }else if (typeOfGroup == "Business"){
                if (numberOfPeople >=100){
                    totalPrice = 10.90 * (numberOfPeople - 10);
                }else{
                    totalPrice = 10.90 * numberOfPeople;
                }
            }else if (typeOfGroup == "Regular"){
                if (10 <= numberOfPeople && numberOfPeople <= 20){
                    totalPrice = 15 * numberOfPeople * (1 - 0.05);
                }else{
                    totalPrice = 15 * numberOfPeople;
                }
            }
            break;
        case "Saturday":
            if (typeOfGroup == "Students"){
                if (numberOfPeople >=30){
                    totalPrice = 9.80 * numberOfPeople * (1 - 0.15);
                }else {
                    totalPrice = 9.80 * numberOfPeople;
                }
            }else if (typeOfGroup == "Business"){
                if (numberOfPeople >=100){
                    totalPrice = 15.60 * (numberOfPeople - 10);
                }else{
                    totalPrice = 15.60* numberOfPeople;
                }
            }else if (typeOfGroup == "Regular"){
                if (10 <= numberOfPeople && numberOfPeople <= 20){
                    totalPrice = 20 * numberOfPeople * (1 - 0.05);
                }else{
                    totalPrice = 20 * numberOfPeople;
                }
            }
            break;
        case "Sunday":
            if (typeOfGroup == "Students"){
                if (numberOfPeople >=30){
                    totalPrice = 10.46 * numberOfPeople * (1 - 0.15);
                }else {
                    totalPrice = 10.46 * numberOfPeople;
                }
            }else if (typeOfGroup == "Business"){
                if (numberOfPeople >=100){
                    totalPrice = 16 * (numberOfPeople - 10);
                }else{
                    totalPrice = 16 * numberOfPeople;
                }
            }else if (typeOfGroup == "Regular"){
                if (10 <= numberOfPeople && numberOfPeople <= 20){
                    totalPrice = 22.50 * numberOfPeople * (1 - 0.05);
                }else{
                    totalPrice = 22.50 * numberOfPeople;
                }
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
// vacation(40, "Regular", "Saturday")