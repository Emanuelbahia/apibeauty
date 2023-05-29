import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import Spinner from 'react-bootstrap/Spinner';
import "./search.css"

function Search() {

  const [data, setData] = useState([]);
  const [product, setProduct] = useState("");
 
    const options = {
      method: 'GET',
      url: 'https://asos2.p.rapidapi.com/v2/auto-complete',
      params: {
        q: product
      },
      headers: {
        'X-RapidAPI-Key': 'd5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
    };

    useEffect(() => {

      axios.request(options).then(function (response) {
        console.log(response.data.suggestionGroups[0].suggestions)
        setData(response.data.suggestionGroups[0].suggestions); 
      }).catch(function (error) {
        console.error(error);
      });

    }, [product]) 
    /* pongo product para que cada vez que quiera buscar una nueva palabra se actualice la busqueda */  

    const searchProduct = (e) => {
       e.preventDefault();
       const word = e.target.search.value;
       if (word) {
         setProduct(word);
         e.target.search.value = "";
       }
    }
  
  //con la palabra q me da del listado, si la pongo en products/v2/list me tira 48 resultados y me da las caracterisitcas de cada uno
    return (      
        <div className="container-search">
          <div className="container-img-search">
            <img className="image-search-publicity" src="https://media.vogue.mx/photos/63befd54a4dd10bbaf418af6/master/w_1600%2Cc_limit/kenzo-mens-ss23-boh-acielle-styledumonde-013.jpg" />
            <img className="image-search-publicity" src="https://modadeportiva.com.ar/wp-content/uploads/2020/02/Aptitud-%E2%80%93-Ropa-deportiva-Hombre-Mujer-Oto%C3%B1o-Invierno-2020.jpg"/>
            <img className="image-search-publicity img-tablet" src="https://modadeportiva.com.ar/wp-content/uploads/2018/08/Danseur-Ropa-Deportiva-Hombre-Mujer-Primavera-Verano-2019.jpg" />
            <img className="image-search-publicity img-pc" src="https://img.freepik.com/fotos-premium/zapatillas-deporte-hombre-sobre-fondo-color-minimalismo-calzado-hombre_441923-3044.jpg"/>
          </div>
          <form className="form-search" method="GET" onSubmit={ searchProduct }>
            <input type="text" className="input-search" name="search" placeholder="example: short" />
            <button className="button-search">Search</button>
          </form>
          <div className="container-list">         
            { product && data && (
              data.map((p) => { 
                return (
                  <Link to={`/searchProducts/${p.searchTerm}`} style={{ color:"black", textDecoration:"none"}}>
                    <p key={ p.searchTerm } className="products-name" > { p.searchTerm } </p>
                  </Link> )
                }))
            }        
          </div> 
          <div className="container-publicity">
            <Link to="face" className="card-publicity">
              <h3 className="h3-publicity h3-cel-tablet">Mira nuestros cosmeticos</h3>
              <h3 className="h3-publicity h3-pc">Experimenta el poder de la belleza con nuestra gama de productos vanguardistas!</h3>
              <img className="img-publicity none-tablet" src="https://www.caracteristicass.de/wp-content/uploads/2018/02/caracteristicas-de-los-cosmeticos.jpg"/>
              <div className="div-multIimg-tablet">
                <img className="img-publicity none-cel" src="https://img.freepik.com/fotos-premium/productos-maquillaje-cosmeticos-perfumes-sobre-fondo-madera_624181-382.jpg"/>
                <img className="img-publicity none-cel none-pc" src="https://img.freepik.com/fotos-premium/frasco-perfume-ramas-abeto-pinas-concepto-perfumes-cosmeticos-caros-fragancia-floral-mujeres-aerosol-perfume_680447-1657.jpg?w=360"/>
              </div>
            </Link>
            <Link to="men" className="card-publicity">
              <h3 className="h3-publicity h3-cel-tablet">Actualiza tu look !</h3>
              <h3 className="h3-publicity h3-pc">Descubre tu estilo único con nuestra amplia selección de moda exclusiva.</h3>
              <img className="img-publicity none-tablet" src="https://cdn-0.somosmamas.com.ar/wp-content/uploads/2019/02/rock-desing-1.jpg"/>
              <img className="img-publicity none-cel" src="https://www.somosmamas.com.ar/wp-content/uploads/2021/02/ropa-casual.jpg"/>
            </Link>
            <Link to="women" className="card-publicity">
              <h3 className="h3-publicity h3-cel-tablet">Marca tendencia !</h3>
              <h3 className="h3-publicity h3-pc">Vive una experiencia de compra excepcional con nuestro servicio personalizado.</h3>
              <img className="img-publicity none-tablet" src="https://sopotey.com/blog/wp-content/uploads/2022/05/ropa-diferente-y-original-mujer.jpg"/>
              <img className="img-publicity none-cel" src="https://phantom-telva.unidadeditorial.es/1c3e5f5d2dad43ca714960c2b623907f/f/webp/assets/multimedia/imagenes/2021/05/12/16208224953157.jpg"/>
            </Link>
          </div>    
        </div>
     );
}

export default Search;