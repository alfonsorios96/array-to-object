function arrayToObject(dataArray) {
    let newObject = {};
    for(let value of dataArray){
        let separed = Object.entries(value)[0];
        newObject[separed[0]] = separed[1];
    }
    return newObject;
}