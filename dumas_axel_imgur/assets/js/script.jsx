const mainLogic = async ()=>
{
    try
    {
        const url = 'https://api.imgur.com/3/image/tBIXQdU';
    const response = await fetch(
        url, 
        {   method: 'GET',
            headers: { Authorization: 'Client-ID d84b4962ff70651' }
        });
    const results = await response.json();
    console.log(results);

    colocarImagen(results.data);
    }
    catch(error)
    {
        console.error(error);
    }
}

mainLogic();

const colocarImagen = (datos)=>
{
    const imagen = <img src={datos.link} alt={datos.title} crossOrigin="Anonymous"/>;
    ReactDOM.render( imagen, document.getElementById('imagen'));
}