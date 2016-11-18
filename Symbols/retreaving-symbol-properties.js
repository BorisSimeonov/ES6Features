let objOne = {
    [Symbol('companyName')]: 'Microsoft Inc.',
    [Symbol('companyStaffCount')] : 21900
};

console.log(objOne);
console.log(Object.getOwnPropertySymbols(objOne));
for(let symbol of Object.getOwnPropertySymbols(objOne)) {
    console.log(symbol);
    console.log(objOne[symbol]);
}