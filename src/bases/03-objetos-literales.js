const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 555555555,
        lat: 14.123232,
        lng: 34.566789
    }

};
// console.table(persona);
// Javascript en el EcmaScript 6 con el operador express ... puedo clonar el objeto
const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);