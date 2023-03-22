let sumNested = (anArray) => {
    const initialValue = 0;
    console.log(anArray.flat(Infinity).reduce((accumulator, currentValue) => accumulator + currentValue, initialValue));
};

sumNested([1, 1, 1, [3, 4, [8]], [5]]);