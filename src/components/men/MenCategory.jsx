import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import "./MenBrands";


function MenCategory({ dataMen, loading }) {

 {/* si loading es true se muestra el componente loading, sino no se muestra */}
    return ( 
        <div className="container-name-list">
            <h2 className="h2-men">Men's Brands</h2> 
            <div className="container-brands">  
                
            { loading && <Loading/> }
            {
                dataMen.map(p => {
                    return (
                        <div className="all-links-category" key={ p.id } >
                            <Link to={`/men/${p.link.categoryId}`} style={{ textDecoration: "none", color: "black" }} > 
                                <p className="p-brand"> { p.content.title } </p> 
                            </Link>
                        </div>
                    )
                })
            }           
            </div>
        </div>
     );
}

export default MenCategory;