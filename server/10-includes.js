//INCLUDES. nos dice si, si esta el elemento dentro del Array. devolviendo true || false.
const pets = [`cat`, `dog`, `bat`];

let respuesta = false;
for (let index = 0; index < pets.length; index++){
    const item = pets[index];
    if (item === `dog`){
        respuesta = true;
        break;
    }
};

const respuesta2 = pets.includes(`dlait`);
console.log("for", respuesta);
console.log("includes", respuesta2);
