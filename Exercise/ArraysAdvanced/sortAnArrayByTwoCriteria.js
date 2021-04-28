function sortAnArrayByTwoCriteria(array) {
    let sortedArray = array.sort((a, b) => compareByTwoParameter(a, b));

    function compareByTwoParameter(a, b) {
        let result;
        if (a.length !== b.length) {
            result = a.length - b.length;
        } else {
            result = a.localeCompare(b);
        }
        return result;
    }
    console.log(sortedArray.join("\n"));
}
sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);