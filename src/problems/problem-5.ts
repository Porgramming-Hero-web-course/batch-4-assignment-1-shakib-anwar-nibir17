const getProperty = <T, K extends keyof T>(
  object: T,
  propertyName: K
): T[K] => {
  return object[propertyName];
};

// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
