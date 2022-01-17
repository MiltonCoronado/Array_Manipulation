//For Each: sirve para hacer recorrido de elementos de un Array. no crea un nuevo Array!!!!! osea lo muta.
const letters = [`a`, `b`, `c`];

// for (let index = 0; index < letters.length; index++){
//     const element = letters[index];
//     console.log(`forNormal`,element);
// };

letters.forEach(item => console.log(`forEach`,item));