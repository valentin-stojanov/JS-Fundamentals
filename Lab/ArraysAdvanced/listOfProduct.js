function listOfProduct(productList) {
    productList
        .sort();
    // .forEach((p, i) => console.log(`${i+1}.${productList[i]}`));
    for (let i = 0; i < productList.length; i++) {
        console.log(`${i + 1}.${productList[i]}`)
    }
}

// listOfProduct(["Potatoes", "Tomatoes", "Onions", "Apples"]);