let getHypotenuseLength = (a,b) => {
    if (a === 0 || b === 0){
        return 0
    } else {
        return Math.sqrt((a*a) + (b*b))
    };
};

console.log(getHypotenuseLength(3,4));