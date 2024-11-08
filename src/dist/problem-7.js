"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        if (this.year > currentYear) {
            return this.year - currentYear;
        }
        else {
            return currentYear - this.year;
        }
    }
}
// const car = new Car("Honda", "Civic", 2026);
// const result7 = car.getCarAge();
// console.log(result7);
