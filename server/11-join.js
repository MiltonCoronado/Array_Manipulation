//JOIN, inmutable. devuelve un String a partir de un Array. pudiendo unirlos por un separador en especifico.
const elements = ["fire", "Air", "water"];

let respuesta = "";
const separador = "--";
for (let index = 0; index < elements.length; index++){
    const item = elements[index];
    respuesta = respuesta + item + separador;
}

const respuesta2 = elements.join("--")
console.log("for", respuesta);
console.log("join", respuesta2);


//JOIN && SPLIT, inmutable. (genero un array con split, genero un string con join afregandole guiones entre cada elemento de array)
const title = `Curso de Manipulacion de Arrays`;

const urlFinal = title.split(" ").join("-").toLocaleLowerCase();
console.log(urlFinal);
