function testFunction(text = '*No Text', author = '*No Author', year = 0) {
    console.log(`Function: text = ${text}, author = ${author}, date = ${year}`);
}

//testFunction();
//equal to the upper call
testFunction(undefined, undefined, undefined);
testFunction('MyText', undefined, undefined);
testFunction(undefined, 'MyName', undefined);
testFunction(undefined, undefined, 2016);
testFunction('MyText', 'MyName', 2016);
console.log('-'.repeat(10));
//Get defaults from another function
function getParam() {
    return 'Default';
}

function printTwoConcatStrings(first, second = getParam()) {
    console.log(`${first} ${second}`);
}

printTwoConcatStrings('First');
printTwoConcatStrings('First', 'Second');
console.log('-'.repeat(10));
//Initialization of second parameter with the first parameter value
((first, second = first)=>{
    console.log(`first = ${first}, second = ${second}`);
    console.log("area: " + (first * second));
})(6);
console.log('-'.repeat(10));