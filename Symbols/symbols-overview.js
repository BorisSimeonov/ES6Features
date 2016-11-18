let lastName = Symbol('Last name'), //Last name is the description
                                    //and it is stored internally in
                                    //the description property
    person = {age: 32};

person[lastName] = 'Ivan';

//Symbol functionality
console.log(`person as JSON: ${ JSON.stringify(person) }`);
console.log(`property "age" in person: ${'age' in person }`);
console.log(`property "lastName" in person: ${ 'lastName' in person }`);
console.log(`person[lastName] = '${person[lastName]}'; type: ${typeof lastName}`);
console.log(`lastName.toSTring() = ${lastName.toString()}`);
console.log('person.lastName = ' + person.lastName +
    '\n***(simulates private property)'); //undefined - Symbols have no literal form