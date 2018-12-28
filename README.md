# array-to-object
Function to generate complex object from array with format {property: value}

## Installation

```sh
git clone https://github.com/igoodbad/array-to-object.git
cd array-to-object/
```

## Usage
Send array with values in format {property: value}.
```sh
const dataArray = [
    { letras: ["a", "b", "d"] },
    { booleano: false },
    { objeto: { otroNumero: 1, unaPalabra: "arandano", otroBoleano: false } },
    { arrayNuevo: ["otras", "cosas", 1, 2, false, true] }
];

arrayToObject(dataArray)
{
    letras: ["a", "b", "d"],
    booleano: false,
    objeto: { otroNumero: 1, unaPalabra: "arandano", otroBoleano: false },
    arrayNuevo: ["otras", "cosas", 1, 2, false, true]
}
```
Function return a single object with all properties

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

Apache License 2004