"use strict";
const validateKeys = (obj, keys) => {
    return keys.every((key) => key in obj);
};
// const user = {
//   name: "Alice",
//   age: 30,
//   email: "alice@example.com",
// };
// console.log(validateKeys(user, ["name", "age"]));
