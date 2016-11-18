let testString = 'I\'m a test string.';

console.log(testString.startsWith('I\'m '));    //true
console.log(testString.endsWith('I\'m '));      //false
console.log(testString.endsWith('.'));          //true
console.log(testString.includes('test'));       //true
console.log(testString.includes('test', 7));    //false - no 'test' match after the 7-th character
console.log(testString.includes('testString')); //false
console.log('-'.repeat(10));
//repeat()
console.log("<pattern>".repeat(3));