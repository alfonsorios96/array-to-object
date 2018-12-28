let dataArray = [
    { letras: ["a", "b", "d"] },
    { booleano: false },
    { objeto: { otroNumero: 1, unaPalabra: "arandano", otroBoleano: false } },
    { arrayNuevo: ["otras", "cosas", 1, 2, false, true] }
];
function arrayToObject() {
    let newObject = {};
    for(let value of dataArray){
        let separed = Object.entries(value)[0];
        newObject[separed[0]] = separed[1];
    }
    return newObject;
}