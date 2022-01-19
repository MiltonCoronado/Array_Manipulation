//FIND, retorna un objeto con la condicional y return el primer elemento que hace match con la condicion. si no lo encuentra envia undefined.

const numbers = [1, 30, 49, 29, 10, 13];

let respuesta = undefined;
for (let index = 0; index < numbers.length; index++){
    const item = numbers[index];
    if (item === 30){
        respuesta = item;
        break;
    }
};

console.log("for",respuesta);

const respuesta2 = numbers.find(item => item === 30);
console.log("find",respuesta2)


//Ejemplo 2. Array de Objetos.
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const respuesta3 = products.find(item => item.id ==='🍔')
console.log("find", respuesta3)

//findIndex. retorna la posicion. si no lo encuentra retorna -1.
const respuesta4 = products.findIndex(item => item.id === '🍔')
console.log("findIndex", respuesta4)
