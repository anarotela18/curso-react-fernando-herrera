const apiKey = 'EWdmFa4gwsoNDlZq64utNa1kOzkcyKoo';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// Esto se conoce como promesa sin cadena
peticion
//esto devuelve una promesa y es pasada al siguiente then
    .then( resp => resp.json()
    .then( ({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        
        img.src = url;

        document.body.append(img);
        
    }))
    .catch(console.warn);