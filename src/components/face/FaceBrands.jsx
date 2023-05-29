import { useAxiosBrands } from "../../hooks/useAxiosBrands";
import { Link } from "react-router-dom"
import "./face.css"
import Loading from "../loading/Loading";

function FaceBrands() {

    const { dataFace, loading } = useAxiosBrands();

    return ( 
        <div className="container-name-list">
            <h2 className="h2-face">Face and body Brands</h2>
            <div className="container-brands">           
                {loading && <Loading/> }
                {
                    dataFace.map(p => {
                        return (
                            <div className="all-links-category" key={ p.id }>
                                <Link to={`/face/${p.link.categoryId}`} style={{ textDecoration: "none", color: "black" }} > 
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

export default FaceBrands;