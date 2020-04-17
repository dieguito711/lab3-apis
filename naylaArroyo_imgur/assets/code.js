async function requestData(){
    const imgur_response = await fetch('https://api.imgur.com/3/image/nujXdaa', 
    {method:'GET',
    headers: {'Authorization': 'Client-ID d1a9bfb42435446'}
    });
    const photo_data = await imgur_response.json();
    return photo_data;
}

const getDataWithAsync = async () => {
    try{
        const photo_data = await requestData();
        const {data} = photo_data;
        const {link, title} = data;
        const divContent = document.querySelector('#content');
        divContent.innerHTML = `<h2>${title}</h2><img src='${link}'>`;
    }
    catch(error){
        console.error(error);
        const divContent = document.querySelector('#content');
        divContent.innerHTML('Houston, tenemos un problema: '+error);
    }
}
getDataWithAsync();


/*
También hice un request con promesas.

function getDataWithPromises(){

    fetch('https://api.imgur.com/3/image/nujXdaa', 
    {method:'GET',
     headers: {'Authorization': 'Client-ID d1a9bfb42435446'}
    })

    .then(function(res){
      return res.json();
    })

    .then(function(data) {
      console.log(data); 
      return data
    });
}

getDataWithPromises();
*/

//curl --location --request GET 'https://api.imgur.com/3/account/{{username}}/image/{{imageId}}' \
//--header 'Authorization: Bearer {{accessToken}}'