/*
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

const src = './imgs/209_031529SierraNevada.jpg';
const imagen = <img src={src}></img>;


ReactDOM.render(
  imagen,
  document.getElementById('imagen')
);

ReactDOM.render(
  element,
  document.getElementById('titulo')
);
*/

async function requestData(){
    const imgur_response = await fetch('https://api.imgur.com/3/image/nujXdaa', 
    {method:'GET',
    headers: {'Authorization': 'Client-ID d1a9bfb42435446'}
    });
    const photo_data = await imgur_response.json();
    console.log(photo_data);
    return photo_data;
  }
  
  const getDataWithAsync = async () => {
    try{
        const photo_data = await requestData();
        const {data} = photo_data;
        const {link, title} = data;
        /*
        const divContent = document.querySelector('#content');
        divContent.innerHTML = `<h2>${title}</h2><img src='${link}'>`;
        */
        const img = <img src={link} width="500px"></img>
        const text = <p>{title}</p>
        ReactDOM.render(
            img,
            document.getElementById('imagen')
        );

        ReactDOM.render(
            text,
            document.getElementById('titulo')
        );
    }
    catch(error){
        console.error(error);
        const divContent = document.querySelector('#content');
        divContent.innerHTML('Houston, tenemos un problema: '+error);
    }
  }
  getDataWithAsync();