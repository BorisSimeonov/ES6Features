function letBasics() {
    /*Shadowing of the outer x variable
    with the inner loop variable x (the loop counter)*/
    let x = 22;
    for(let x = 0; x < 10; ++x) {
        console.log(`Inner x = ${x}`);
    }
    console.log(`Outer x after the loop = ${x}`);

    //Block scope
    {
        //Throws Error for newLetVariable, because it's mot declared
        //console.log is in the temporal dead zone of the variable

        //console.log(newLetVariable);
        let newLetVariable = 10;
    }
    //Throws Error for newLetVariable, because it's out of scope

    //console.log(newLetVariable);
}

function letInLoops() {
    let printFunctionsArray = [];
    for(let i = 0; i < 10; ++i) {
        printFunctionsArray.push(function(){console.log(i)})
    }
    printFunctionsArray.forEach(fn => fn());
}

function varInLoops() {
    let printFunctionsArray = [];
    for(var i = 0; i < 10; ++i) {
        printFunctionsArray.push(function(){console.log(i)})
    }
    printFunctionsArray.forEach(fn => fn());
}
console.log('Let Basics:');
letBasics();
console.log('-'.repeat(10));
console.log('Var as counter in loop:');
varInLoops();
console.log('-'.repeat(10));
console.log('Let as counter in the same loop:');
letInLoops();
console.log('-'.repeat(10));
