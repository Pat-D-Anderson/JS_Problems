let capitalize = (someString) => {
    let output = [];
    output.push(someString.charAt(0).toUpperCase());
    for (i = 1; i < someString.length; i++){
        someString.charAt(0).toUpperCase;
        if (someString.charAt(i-1) === ' '){
            output.push(someString.charAt(i).toUpperCase());
        } else {
            output.push(someString.charAt(i));
        };
    };
    console.log(output.join(""));
};

capitalize('just do it');