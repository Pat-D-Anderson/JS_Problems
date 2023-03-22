let inputString = 'desserts'
const inputArray = inputString.split("");
let outputArray = [];

while (inputArray.length){
    outputArray.push(inputArray.pop());
};

let outputString = outputArray.join("");

console.log(outputString);
