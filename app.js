
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

    start() {
        console.log(this.year);
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
        eggSize = 0,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.eggSize = eggSize;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}
class Bobcat {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        patience = true
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.patience = patience;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Couger {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        ambush = true,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.ambush = ambush;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Dog {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        loyalty = true
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.loyalty = loyalty;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Elephant {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        emotions = true,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.emotions = emotions;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Fox {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        escapePattern = true
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.escapePattern = escapePattern;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Giraffe {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        neckSize = 0
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.neckSize = neckSize;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Horse {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        loyalty = true,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.loyalty = loyalty;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Iguana {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        stealth = false,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.stealth = stealth;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Jackel {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        scavenger = false,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.scavenger = scavenger;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Kangaroo {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        jumpyBoy = true,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.jumpyBoy = jumpyBoy;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Llama {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        spit = true,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.spit = spit;    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Monkey {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        smart = true
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.smart = smart;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Narwhal {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        hornyBoy = true
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.hornyBoy = hornyBoy;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Owl {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        who = true,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.who = who;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Possum {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        dead = false,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.dead = false;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Quail {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        plusWaffles = 'good'
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.plusWaffles = plusWaffles;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Rhino {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        hornyBoy = true,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.hornyBoy = hornyBoy
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Snake {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        legs = false
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.legs = legs
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Tiger {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        ambush = true
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.ambush = ambush
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Unicorn {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        hornyBoy = true,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.hornyBoy = hornyBoy
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Vole {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        gross = true
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.gross = gross
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Wombat {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        real = true,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.real = real
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Xeme {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        real = true
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.real = real
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Yak {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        milk = 9000
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.milk = milk
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

class Zebra {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        stealth = false,
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.stealth = stealth
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

let allison = new Alligator("Allison", "Green", "F", 200, 60, "big", 15);
let bobby = new Bobcat("Bobby", "grey", "M", 33, 30, 'big', true)

