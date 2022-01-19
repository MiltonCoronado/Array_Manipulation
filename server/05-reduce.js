//Reduce es un metodo inmutable, retorna una valor a partir de una lista de valores.
const totals = [1,2,3,4];

// let sum = 0;
// for (let index = 0; index < totals.length; index++){
//     const element = totals[index];
//     sum = sum + element;
// }

// console.log(sum);

const respuesta = totals.reduce((acc, item) => acc + item, 0)
console.log("original", totals)
console.log("new", respuesta)