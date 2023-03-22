let stringReverse = (aString) => {
    const inputArray = aString.split("");
    let outputArray = [];
    for (let i = inputArray.length; i >= 0; i--) {
        outputArray.push(inputArray[i]);
    }
    let outputString = outputArray.join("");
    return outputString;
};

const inputString = 'desserts';

console.log(stringReverse(inputString));
