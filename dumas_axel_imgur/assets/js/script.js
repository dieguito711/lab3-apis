const mainLogic = async ()=>
{
    const url = 'https://api.imgur.com/3/image/Lqe6IT6';
    const response = await fetch(
        url, 
        {   method: 'GET',
            headers: { Authorization: 'Client-ID d84b4962ff70651' }
        });
    const results = await response.json();
    console.log(results);

    const imagen = document.createElement('img');
    imagen.src = results.data.link;
    imagen.alt = results.data.title;
    ReactDOM.render( imagen, document.getElementById('imagen'));
}

mainLogic();