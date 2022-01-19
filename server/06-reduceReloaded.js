//Reduce. retornando un solo valor que es un objeto.
const items = [1, 3, 2, 3];

const respuesta = items.reduce((obj, item) => {
    if (!obj[item]){//si no existe un item en el objeto,
        obj[item] = 1;//crea uno inicializandolo en uno
    } else {
        obj[item] = obj[item] + 1;//si el item existe le suma uno.
    }
    return obj;
}, {});

console.log(respuesta);


//Reduce. retornando un solo valor que es un objeto. ejemplo 2.
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];
  
const respuesta2 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
  } else {
      obj[item] = obj[item] + 1;
  }
  return obj;
}, {} );//pay names????

console.log(respuesta2);
console.log(data);