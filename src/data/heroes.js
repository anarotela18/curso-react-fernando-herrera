// Ej1: de como exportar por defecto no lleva el nombre del arreglo
// export default [];

// Ej2: al final del archivo
 const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// Ej2:
// export const owners = ['DC', 'Marvel'];
// export default heroes;

// Ej3: exportar todo en una sola linea pero aqui ya no lo tenemos como exportacion por defecto
// const owners = ['DC', 'Marvel'];
// export {
//     heroes as default,
//     owners
// }

export const owners = ['DC', 'Marvel'];
export default heroes;