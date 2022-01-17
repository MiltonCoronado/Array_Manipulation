//Map es inmutable,no cambia el array original, crea un nuevo Array con la transformacion aplicada.
const letters = [`a`, `b`, `c`];

const newArray = letters.map(item => item + "++")

// for (let index = 0; index < letters.length; index++){
//     const element = letters[index];
//     newArray.push(element + `++`);
// }

console.log("original", letters);
console.log("new", newArray);