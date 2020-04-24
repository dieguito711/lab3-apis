const name = 'Probando IMGur';
const title = <h1>Hello, {name}</h1>;

// const src = './imgs/209_031529SierraNevada.jpg';
const src = 'https://i.imgur.com/tBIXQdU.jpg';

let imagen; 

// async function getImgUrl2() {

// }

const getImgUrl = async () => {
  try {
    const url = 'https://api.imgur.com/3/image/tBIXQdU';
    
    const response = await fetch(
      url,
      {
        method: 'GET',
        headers: { Authorization: 'Client-ID d84b4962ff70651' }
      });

    const results = await response.json();
    
    // console.log(results);
    colocarImagen(results.data);
  }
  catch (error) {
    console.error(error);
  }
}


getImgUrl();



const colocarImagen = (datos) =>
{
    console.log(datos.link);
    // imagen = <img src={datos.link} alt={datos.title} />; // jsx
    imagen =    <img src={src} alt={'probando'} />;
    //  localhost:5500/imgs/209_031529SierraNevada.jpg
    ReactDOM.render(
      imagen,
      document.getElementById('imagen')
    );       
}





ReactDOM.render(
  title,
  document.getElementById('title')
);
