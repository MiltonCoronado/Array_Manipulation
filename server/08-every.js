//EVERY. metodo inmutable, evalua si todos los elementos cumplen con la condicion y retorna un dato booleano.
const numbers = [1,30,39,29,10,13];

let respuesta = true;
for (let index = 0; index < numbers.length; index++){
    const item = numbers[index];
    if(item >= 40 ){
        respuesta = false;
    };
};

console.log("for", respuesta)

const respuesta2 = numbers.every(item => item <= 40)
console.log("for", respuesta2)


//Ejemplo 2.
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];

  const respuesta3 = team
  .map(item => item.age)
  .every(item => item < 15)

  console.log(respuesta3)