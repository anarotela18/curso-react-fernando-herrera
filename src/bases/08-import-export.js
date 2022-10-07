import  heroes  from '../data/heroes';
//console.log(owners);

//Ej1: de exportacion por defecto sin nombre de arreglo
//import heroes from './data/heroes';

// const getHeroesById = (id)=>{
//     return heroes.find( (heroe) => {
//         if( heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }
// console.log(getHeroesById(2));

// La funcion find() se utiliza para crear un nuevo arreglo con el valor que cumpla la condicion
export const getHeroesById = (id) => heroes.find( ( heroe ) => heroe.id === id);
//console.log(getHeroesById(2));

// La funcion filter() se utiliza para crear un nuevo arreglo con todos los valores que cumplan la condicion
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroesByOwner('Marvel'));