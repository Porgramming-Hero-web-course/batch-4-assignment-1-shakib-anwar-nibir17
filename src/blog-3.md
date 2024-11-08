# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

### Type Guards:

In Typescript type guard is a feature that allows the developer to narrow down a type. Type Guard is often regarded as narrowing. Using Type Guard helps a developer to write some conditions based on type narrowing.This is usually done in conditional block.

### Example:

```tsx
type Dog = { breed: string; bark: () => void };
type Cat = { breed: string; meow: () => void };

// Type guard function to check if it's a Dog
const isDog = (pet: Dog | Cat): pet is Dog => "bark" in pet;

// Usage
const pet: Dog | Cat = { breed: "Labrador", bark: () => console.log("Woof!") };

if (isDog(pet)) {
  pet.bark();
} else {
  pet.meow();
}
```

Here Type Guard is used to narrow down the bark() method in pet and if the pet is dog it console logs "Woof!"

### Type Guards Necessity:

- 1. Type narrowing
- 2. Prevents Runtime Errors
- 3. Improving Type Safety
- 4. Flexibility and Reusability
- 5. Cleaner and Readable code

### Various Type Guards

#### Using typeof

The typeof operator is used to check the type of a value. It's useful for primitive types like number, string, boolean, symbol, etc.

```tsx
type IsNumber = string | number;

const add = (param1: IsNumber, param2: IsNumber): IsNumber => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};
```

#### Using in Guard

The in operator can be used to check if a property exists in an object. It's useful when checking for specific properties in objects of different types.

```tsx
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`My name is ${user.name} and my role is ${user.role}`);
  } else {
    console.log(`My name is ${user.name}`);
  }
};
```

#### Using instanceof Guard

The instanceof operator is used to check if an object is an instance of a class or a constructor function.

```tsx
class Car {
  constructor(make) {
    this.make = make;
  }
}

class Sedan extends Car {
  constructor(make, model) {
    super(make);
    this.model = model;
  }
}

class SUV extends Car {
  constructor(make, color) {
    super(make);
    this.color = color;
  }
}

const displayCarInfo = (car) => {
  if (car instanceof Sedan) {
    console.log(`This is a sedan made by ${car.make}, model: ${car.model}`);
  } else if (car instanceof SUV) {
    console.log(`This is an SUV made by ${car.make}, color: ${car.color}`);
  }
};
```
