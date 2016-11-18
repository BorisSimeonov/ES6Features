function constRestrictions() {
    const num = 0;
    //On the next line: TypeError: Assignment to constant variable.
    //num = 22;

    //constants don't protect inner object parameters from change
    const obj = {name: 'Pesho', age: 37};
    obj.name = 'AnotherName';
    obj.age = 99;
    console.log(obj);
}

constRestrictions();
console.log('-'.repeat(10));