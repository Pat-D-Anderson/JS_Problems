let num1 = 4;
let num2 = 10;

let summation = (input1, input2) => {
    let result = 0;    
    if (input1 < input2){
        result = (((input2 * (input2+1))/2) - ((input1 * (input1-1))/2));
    };
    console.log(result);
};

summation(num1, num2);