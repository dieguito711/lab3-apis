const url = 'https://api.imgur.com/3/image/pVYS5Or';

const getImg = async () => {

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Client-ID 1bf39acc128bfab',
        }
    });

    const data = await response.json();
    console.log(data);
    return data;

}

const showImage = async () => {

    try{
        const showImg = await getImg();
        const {data} = showImg;
        const {link, title} = data;

        /*
        let img = document.createElement("img");
        img.setAttribute("src", link);
        img.setAttribute("width", "500px");
        document.getElementById("imagen").append(img);
        */

       //Hago un destructuring de la propiedad obtenida para extraer sólo el link (Nayla's edit)
       const obtainLink = {link}
       const src = obtainLink.link;
       console.log(obtainLink);
       console.log(src);

        const image = <img src={src} width="900px"></img>;
        //const image = <img src={link} width="900px"></img>;

        const imageTitle = <h3>{title}</h3>

        ReactDOM.render(
            image, 
            document.getElementById("imagen")
        );

        ReactDOM.render(
            imageTitle, 
            document.getElementById("titulo")
        );

    } catch(error){
        console.log("Error al buscar la imagen", error);
    }    
    
}

showImage();
