// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'Soldado'
};
/**
 * Para evitar estar realizando el console.log(persona.nombre); se puede realizar la desestructuración
 */


// En caso de necesitar renombrar la variable nombre por nombre2
//const { nombre:nombre2 } = persona;
//const { edad, clave, nombre } = persona;

const userContext = ({clave, nombre, edad, rango = "Capitan"})=>{
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1234,
            lng: -12.1234
        }
    }
}
const { nombreClave, anios, latlng:{lat,lng} } = userContext(persona);
console.log(nombreClave, anios, lat, lng);



