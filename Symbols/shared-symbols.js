let companyName = Symbol.for('cName');
let newCompanyName = Symbol.for('cName');
let objOne = {
    [companyName]: 'Microsoft Inc.'
};
let objTwo = {
    [newCompanyName]: 'Google Inc.'
};
console.log(String(companyName));
console.log('The two symbols are equal: ' +
    Object.is(newCompanyName, companyName));
console.log(objOne[companyName]);
console.log(objTwo[companyName]);