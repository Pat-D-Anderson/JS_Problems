let fizzBuzz = (n) => {
    let output = [];
    for (i = 1; i <= n; i++) {
        if (i <= 0){
            output.push('');
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            output.push(` ${i}fizzbuzz`);
        } else if (i % 3 === 0){
            output.push(` ${i}fizz`);
        } else if (i % 5 === 0){
           output.push(` ${i}buzz`);
        } else {
            output.push(` ${i}`);
        }
    };
    console.log(output.toString());
};


fizzBuzz(0);