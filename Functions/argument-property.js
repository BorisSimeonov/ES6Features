function testFunct(name) {
    'use strict';
    console.log('Name parameter: ' + name);
    name = 'newName';
    console.log('Name parameter after change: ' + name);
    console.log('Arguments:');
    console.log(arguments);
}

function testNonStrictFunct(name) {
    console.log('Name parameter: ' + name);
    name = 'newName';
    console.log('Name parameter after change: ' + name);
    console.log('Arguments:');
    console.log(arguments);
}

testFunct('Ivan', 'georgi');
console.log();
testNonStrictFunct('Ivan', 'georgi');
console.log('-'.repeat(10));