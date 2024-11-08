"use strict";
const removeDuplicates = (numberArray) => {
    return numberArray.reduce((newArray, number) => {
        if (!newArray.includes(number)) {
            newArray.push(number);
        }
        return newArray;
    }, []);
};
// const result2 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
