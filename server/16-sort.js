//SORT, Metodo Mutable!!!. usado para hacer ordenamiento de los Arrays. si es un Array de strings lo ordena deacuerdo a caracteres de ASCII.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);


//SORT, ordenando numeros. solo aqui con funcion de resta.
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);


//SORT, ordenando Array de strings
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];

words.sort((a,b) => a.localeCompare(b));//localeCompare solo para old browsers.
console.log(words);


//SORT. con objetos.
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  orders.sort((a,b) => b.total - a.total);//aqui colocamos el atributo por el cual queremos ordenar.
  console.log(orders);