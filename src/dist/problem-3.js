"use strict";
const countWordOccurrences = (text, word) => {
    const lowerCaseText = text.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const words = lowerCaseText.split(" ");
    const occurrences = words.filter((word) => word === lowerCaseWord).length;
    return occurrences;
};
// const result3 = countWordOccurrences("I love typescript", "typescript");
