//filter, es inmutable. Filtra los elementos de un Array, generando uno nuevo.
const words = ["spray", "limit", "elite", "exuberant"];
// const newArray = [];

// for (i = 0; i < words.length; i++){
//     const item = words[i];
//     if(item.length >= 6){
//         newArray.push(item)
//     }
// };

// console.log("original",words);
// console.log("new",newArray);

const respuesta = words.filter(item => item.length >= 6);
console.log("original", words)
console.log("new", respuesta);


//Filter. ejemplo 2:
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 210,
        delivered: false,
      },
  ];

//const respuesta2 = orders.filter(item => item.delivered && item.total >= 100);
//console.log(respuesta2)

const search = (name) => {
    return orders.filter(item => {
        return item.customerName.includes(name)
    });
};

console.log(search("Nico"));