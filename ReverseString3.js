let inputString = 'structurepoint'
let outputArray = [];

for (i = inputString.length; i >= 0; i--){
    outputArray.push(inputString.charAt(i));
};

console.log(outputArray.join(""));