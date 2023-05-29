import { Link } from "react-router-dom";
import "./womenBrands.css"
import Loading from "../loading/Loading";

function WomenCategory({ dataWomen, loading }) {

    return ( 
        <div className="container-name-list">
            <h2 className="h2-women">Women's Brands</h2>
            <div className="container-brands">
                
                {loading && <Loading/> }
                {
                    dataWomen.map(p => {
                        return (
                            <div className="all-links-category" key={ p.id } >
                                <Link to={`/women/${p.link.categoryId}`} style={{ textDecoration: "none", color: "black" }} > 
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

export default WomenCategory;