let num1 = 4;
let num2 = 10;

let summation = (input1, input2) => {
    let result = 0;
    let increaseBy = input1;
   
   for (i = 0; i <= (input2 - input1); i++){
    result = result + increaseBy;
    increaseBy++;
   }
   console.log(result);
};

summation(num1, num2);

