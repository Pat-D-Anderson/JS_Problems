const myObj = {
    "key1": "value1",
    "key2": "value2",
    "key three": "value3"
};

let printKeyValues = (anObject) => {
    for (const [key, value] of Object.entries(anObject)){
        console.log(`${key}: ${value}`);
    }
};

printKeyValues(myObj);