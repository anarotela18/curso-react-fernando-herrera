// Este es un ejemplo de promesas
// const getImagenPromesa = () => {
//     return new Promise( (resolve, reject) => {
//         resolve('aksdasdd');
//     })
// }

// Este es otro ejemplo de promesas 
//const getImagenPromesa = () => 
    //new Promise( resolve => resolve('aksdasdddjdjdj'));
// getImagenPromesa().then(console.log);

// Este es un ejemplo de async o funcion asincrona
// const getImagen = () =>{
//     return 'askjdlaksdfasd';
// } 
// console.log(getImagen());

// Para convertir este async en una promesa
// const getImagen = async() =>{
//     return 'askjdlaksdfasd';
// } 
// getImagen().then(console.log());

// Este es un ejemplo de await y ayuda a que podamos trabajar todo el codigo como asincrono
const getImagen = async() =>{

try {
    const apiKey = 'EWdmFa4gwsoNDlZq64utNa1kOzkcyKoo';  
    const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data }   = await resp.json();
    
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
} catch (error) {
    // manejo del error
    console.log(error);
}

} 
getImagen();