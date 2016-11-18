//make object available for concat()
let collection = {
    0: 'Hello',
    1: ' World',
    length: 2,
    [Symbol.isConcatSpreadable] : true
};

let messages = ['Hi,'].concat(collection, '!');
console.log(messages.join(''));