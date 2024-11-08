const validateKeys = <T extends Object>(obj: T, keys: (keyof T)[]): boolean => {
  return keys.every((key) => key in obj);
};

// const user = {
//   name: "Alice",
//   age: 30,
//   email: "alice@example.com",
// };

// console.log(validateKeys(user, ["name", "age"]));
