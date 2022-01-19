//SOME, es inmutable, se utiliza para saber si "algun" elemento cumple con una condicion. no importa si sean dos o uno. si alguno lo cumple retorna true y si no false.
const numbers = [1, 2, 3, 4];

// let respuesta = false;
// for (let index = 0; index < numbers.length; index++){
//     const item = numbers[index];
//     if (item % 2 === 0){
//         respuesta = true;
//         break;
//     }
// };
// console.log(respuesta);


const respuesta = numbers.some(item => item % 2 === 0);
console.log("original", numbers)
console.log("new", respuesta);


//SOME. ejemplo 2 con objetos.
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

const respuesta2 = orders.some(item => item.delivered);
console.log("new", respuesta2);


//SOME. ejemplo 3.  TODO: instalar bien la libreria date-fns.
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),//7 pm
    endDate: new Date(2021, 1, 1, 20, 30),//8:30 pm
  };

  var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

  const isOverlap = (newDate) => {
      return dates.some(date => {
          return areIntervalsOverlapping(
              {star: date.startDate, end: date.endDate},
              {start: newDate.startDate, end: newDate.endDate},
          )
      })
  };

  console.log(isOverlap(newAppointment));
