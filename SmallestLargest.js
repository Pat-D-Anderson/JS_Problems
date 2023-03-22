const inputArray = [-100, 1000, 2, 7, -3];

let smallestLargest = (someArray) => {
    let largest = 0;
    let smallest = 0;
    let outputArray = [];
    
    if (someArray.length){
        for (x = 0; x < someArray.length; x++){
            if(someArray[x] > someArray[x+1] && someArray[x] > largest){
                largest = someArray[x];
            } else if (someArray[x] < someArray[x+1] && someArray[x] < smallest){
                smallest = someArray[x];
            }
        };
        outputArray = [smallest, largest];
        return outputArray;
    } else if (!someArray.length){
        return someArray;
    }
};

console.log(smallestLargest(inputArray));