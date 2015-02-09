    var inputs = process.argv.slice(2);
    var result = inputs.map(x => x.slice(0,1))
                        .reduce( (x,y) => x.concat(y));
console.log(`[${inputs}] becomes "${result}"`);