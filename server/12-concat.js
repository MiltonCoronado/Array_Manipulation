//CONCAT, es inmutable. metodo que sirve para fusionar arrays.
const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

// //FOR.
const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++){
    const item = otherElements[index];
    newArray.push(item);
};

console.log(`original`,elements)
console.log(`for`, newArray);

//concat.
const respuesta = elements.concat(otherElements);
console.log(`concat`, respuesta);

//spread operator. es inmutable. caso de concatenacion de Arrays.
const respuesta2 = [ ...elements, ...otherElements];
console.log(`sp`, respuesta2);

//mutando el Array con push y spread operators.
elements.push(...otherElements)
console.log(`original`, elements)

