let stringArray = ['Hi', 'my name is', 'what', 'my name is', 'who', 'my name is', 'Slim Shady'];

let findDup = (anArray) => {
    let seenString = [];
    for(i = 0; i < anArray.length; i++){
        for (j = 0; j <= seenString.length; j++){
            if (seenString[j] === anArray[i]){
                return anArray[i];                
            };            
        };
        seenString.push(anArray[i]);
    };
};

if (findDup(stringArray) === undefined){
    console.log('No repeats.');
} else {
    console.log(findDup(stringArray));
};
