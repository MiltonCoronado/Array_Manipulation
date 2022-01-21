//METODO FLAT, inmutable. sirve para aplanar nested Arrays indicandole el nivel de anidamiento. 
const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];


//FOR.
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

//FLAT.
const rta = matriz.flat(3);
console.log(`original`, matriz)
console.log('for', newArray);
console.log('flat', rta);