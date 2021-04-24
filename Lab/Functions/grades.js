function grades(grade) {
    let description = "";

    if (grade < 3) {
        description = "Fail";
        return console.log(`${description} (2)`);
    } else if (3 <= grade && grade < 3.5) {
        description = "Poor";
    } else if (3.5 <= grade && grade < 4.5) {
        description = "Good";
    } else if (4.5 <= grade && grade < 5.5) {
        description = "Very good"
    } else {
        description = "Excellent";
    }
    console.log(`${description} (${grade.toFixed(2)})`);
}

// grades(3.33);