//FLATMAP, es inmutable. utilizado por lo general para mapear y aplanar Arrays in objects.
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
  ];
  
  const respuesta = users.map(item => item.attributes).flat();
  const respuesta2 = users.flatMap(item => item.attributes);

  console.log(`original`, users);
  console.log("map-flat", respuesta);
  console.log("flatMap", respuesta2);


//FLATMAP. ejempplo 2, Array de objetos.
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

  const respuesta3 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
  });
  console.log(respuesta3);