function showFeatures() {
    let divText = "I am the content DIV",
        html = 'HTML',
        test = 'Text',
        simpleMultilineHTML = `
<html>
    <head>
          <title>${test + ' ' + html}</title>
    </head>
    <body>
          <div id="content">${divText}</div>
    </body>
</html>`.trim();

    return(simpleMultilineHTML);
}

function tags() {
    function tag(literal, ...parameters) {
        let result = "";
        for(let index = 0; index < parameters.length; ++index) {
            result += literal[index];
            if(typeof parameters[index] === 'number') {
                parameters[index] = Math.floor(parameters[index] / 12);
            }
            result += parameters[index];
        }
        result += literal[literal.length -1];
        return result;
    }
    let name = 'Ivan',
        ageInMonths = 480;

    //process the template literal through the tag function -
    //turn months value into years
    let templateString = tag`My name is ${name} and I am ${ageInMonths} old.`;
    return templateString;
}

console.log(showFeatures());
console.log('-'.repeat(10));
console.log(tags());