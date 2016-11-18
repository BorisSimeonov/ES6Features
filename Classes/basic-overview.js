//ECMAScript 5 class declaration
function Dog(name, age) {
    this.name = name;
    this.age = age;
}

Dog.prototype.bark = function () {
    console.log(`${this.name} has barked !!!`);
};

let sparky = new Dog('Sparky', 3);
console.log(sparky);
console.log(`Sparky is a Dog instance: ${sparky instanceof Dog}`);
sparky.bark();
console.log('-'.repeat(10));

//ECMAScript 6 class declaration
class ModernDog {
    constructor(name = 'Sparky', dogAge = 3) {
        this.name = name;
        this.age = dogAge;
    }

    bark() {
        return `${this._name} has barked !!!`;
    }
}
let modernSparky = new ModernDog(); //using the default
                                    // constructor name and age

console.log(modernSparky);
console.log(`Sparky is a ModernDog instance: ${
    modernSparky instanceof ModernDog}`);
console.log(modernSparky.bark());