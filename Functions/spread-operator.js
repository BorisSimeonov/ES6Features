let values = [25, 50, 75, 100];

function spreadTest(first, ...others) {
    //console.log(arguments);
    console.log('First: ' + first);
    console.log('Others: ' + others);
}

console.log(Math.min(...values));
console.log(Math.max(...values));
console.log('-'.repeat(10));

spreadTest();
console.log('-'.repeat(10));

spreadTest(1);
console.log('-'.repeat(10));

spreadTest(1,2,3,4,5,6);
console.log('-'.repeat(10));