function passwordValidator(password) {

    let hasLength = checkLength(password);
    let hasDigits = hasTwoDigits(password);
    let hasForbiddenSymbol = checkForbiddenSymbol(password);

    if (!hasLength) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (hasForbiddenSymbol) {
        console.log("Password must consist only of letters and digits");
    }
    if (!hasDigits) {
        console.log("Password must have at least 2 digits");
    }

    if (hasLength && !hasForbiddenSymbol && hasDigits){
        console.log("Password is valid");
    }

    function hasTwoDigits(password) {
        let hasTwoDigits = false;
        let digitsCounter = 0;
        for (let i = 0; i < password.length; i++) {
            if (isDigit(password[i])) {
                digitsCounter++;
            }
        }
        return (digitsCounter >= 2);
    }

    function checkLength(password) {
        let length = password.length;
        return (6 <= length && length <= 10);
    }

    function checkForbiddenSymbol(password) {
        let hasForbiddenSymbol = false;
        for (let i = 0; i < password.length; i++) {
            let currentCharCode = password.charCodeAt(i);
            if (!(isDigit(password[i]) ||
                (65 <= currentCharCode && currentCharCode <= 90) ||
                (97 <= currentCharCode && currentCharCode <= 122))){
                hasForbiddenSymbol = true;
                break;
            }
        }
        return hasForbiddenSymbol;
    }

    function isDigit(charAsStr) {
        let currentCharCode = charAsStr.charCodeAt(0);
        return (48 <= currentCharCode && currentCharCode <= 57);
    }
}

// passwordValidator('logIn');