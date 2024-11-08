class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number | string {
    const currentYear = new Date().getFullYear();
    if (this.year > currentYear) {
      return "Let the car be made first. Can calculate the age later";
    } else {
      return currentYear - this.year;
    }
  }
}

// const car = new Car("Honda", "Civic", 2026);
// const result7 = car.getCarAge();
// console.log(result7);
