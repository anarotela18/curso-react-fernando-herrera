// Funciones en JS
/*
 * Ej1: No se recomienda hacer de esta manera porque se podria asignar facilmente valores * y eso * seria incorrecto 
 */
//  function saludar (nombre){
//      return `Hola, ${nombre}`;
//  }
 //saludar = 30;
 //console.log(saludar);


/*
 * Ej1: La forma correcta seria con una constante y le asignamos una función 
 */
//    const saludar = function(nombre) {
//        return `Hola, ${nombre}`;
//    } 
/* Al intentar asignar un valor a esa constante ya se genera un error  */
 //saludar = 20;
 //console.log(saludar('Goku'));


/* 
 * Ej2: Otra forma de utilizar las funciones es, las funciones con flechas 
 * y es lo que más se *va a utilizar en este curso 
 */
// const saludar2 = (nombre) =>{
//     return `Hola, ${nombre}`;
// }
//console.log(saludar2('Vegeta'));

/* 
 * Ej3: En el caso de que tengamos en el cuerpo de la funcion solo 1 return se puede simplificar
 */
//const saludar3 = (nombre)=> `Hola, ${nombre}`;;
//console.log(saludar3('Seidy'));

/* 
 * Ej4: Otro caso podria ser de utilizar la funcion de flecha pero sin argumentos
 */
//const saludar4 = () => `Hola Mundo`;
//console.log(saludar4());

/* 
 * Ej5: Funcion de flecha con objetos
 */
const getUser = ()=>{
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
};
//console.log(getUser());
/* 
 * Ej6: Funcion de flecha que devuelve un objeto pero sin el return
 */
const getUser2 = ()=> ({
        uid: 'ABC567',
        username: 'Prueba890'
    } );
const user = getUser2();
//console.log(user);

/* 
 * Tarea
 * 1. Transformen a una funcion de flecha
 * 2. Tiene que retornar un objeto implicito
 * 3. Pruebas
 */
const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre
    });
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

