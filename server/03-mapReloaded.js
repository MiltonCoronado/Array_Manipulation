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
  ];

//   const respuesta = orders.map(item => item.total);

//   console.log(orders);
//   console.log(respuesta);



//   const respuesta2 = orders.map(item => {
//        item.impuesto = .19;//si el elemento existe accede a el, si no lo empuja al objeto copia, pero tambien modifica al original, esto sucede solo con objects. 
//        return item; 
//   });

//   console.log(orders);
//   console.log(respuesta2);



const respuesta3 = orders.map(item => {
    return {
        ...item,//el spread operator hace que el iterante se separe del objeto original, creando asi la nueva key y value solo en el objeto copia.
        impuesto: .19,
    }
});

console.log("original", orders);
console.log("new", respuesta3);


//Una de las diferencias fundamentales entre objetos y primitivos es que los objetos son almacenados y copiados “por referencia”, en cambio los primitivos: strings, number, boolean, etc.; son asignados y copiados “como un valor completo”.