function loadingBar(n){
    let repetition = n/10;
    let array =[];

    for (let i = 0; i < repetition; i++) {
        array.push("%");
    }
    for (let i = repetition; i < 10 ; i++) {
        array.push(".");
    }

    if (repetition<10){
        console.log(`${n}% [${array.join("")}]`);
        console.log("Still loading...");
    }else{
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
}
// loadingBar(80);