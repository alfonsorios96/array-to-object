const arrayToObject = dataArray => dataArray.reduce((accumulator, item) => {
    const separed = Object.entries(item)[0];
    accumulator[separed[0]] = separed[1];
    return accumulator;
});
