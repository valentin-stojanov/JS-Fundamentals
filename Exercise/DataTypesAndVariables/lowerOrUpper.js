function lowerOrUpper(char) {
    let charCode = char.charCodeAt(0);
    
    if (65 <= charCode && charCode <= 90) {
        console.log("upper-case");
    } else if (97 <= charCode && charCode <= 122) {
        console.log("lower-case");
    }
}
// lowerOrUpper('A');
// lowerOrUpper('f');