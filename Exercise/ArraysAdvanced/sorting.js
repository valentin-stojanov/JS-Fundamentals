function sortingNumbers(array) {
    let sortedArray = array.sort((a, b) => b - a);
    for (let i = 1; i < sortedArray.length; i += 2) {
        sortedArray.splice(i, 0, sortedArray.pop())
    }
    console.log(sortedArray.join(" "));
}
// sortingNumbers([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// sortingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);