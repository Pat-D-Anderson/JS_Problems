let areTheseAnagrams = (stringOne, stringTwo) => {
    let reverseStringOne = [];
    for (i = stringOne.length; i >= 0; i--){
        reverseStringOne.push(stringOne.charAt(i))
    };
    if (reverseStringOne.join("") === stringTwo){
        return true;
    } else { 
        return false;
    };
};

console.log(areTheseAnagrams('stressed', 'desserts'));