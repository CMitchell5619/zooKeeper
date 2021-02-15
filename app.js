
let car = {
   make: "Chevy",
   model: "Tracker",
   year: 1989,
   price: 2000,
   color: "Olive Drab",
}

let subby = {
    make: "Subaru",
    model: "Forester",
    year: 2017,
    price: 27000,
}

class Car {
    constructor(make, model, year, price){
    this.make = make
    this.model = model
    this.year = year
    this.price = price //use || to create default//

    }
}
let cars = [car, subby]
cars = [new Car ("Chevy", "Tracker", 1989, 2000), new Car ()]

class Alligator {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}

export default Alligator;

