import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useAxiosDetailProduct } from "../../hooks/useAxiosDetailProduct";
import Loading from "../loading/Loading";
import "./MenBrands";


//en este componente muestro el detalle del producto con el id que me llega por useParams
function MenProductDetail() {

    const { productId } = useParams();
    const { data, dataImages, price, loading } = useAxiosDetailProduct(productId); 
    
    return (     
        <div className="container-name-list">
            {data && <p className="product-name"> {data.name} </p>}
            <div className="container-product-detail">         
                { loading && <Loading/> }      
                <div className="container-image-product">                
                    { 
                        dataImages.map(p => {
                            return (
                             <img className="image-product" key={ p.url } src={`https://${p.url}`} />           
                            )
                        })                  
                    }
                </div>               
                <Table striped bordered hover variant="dark" className="table-size-value">
                    <thead>
                        <tr>
                        <th>Size</th>
                        <th>Value</th>                 
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            price.map(v => {
                                return (
                                    <tr>
                                        <td> { v.brandSize } </td>
                                        <td> USD { v.price.current.value } </td>
                                    </tr>
                                )})                   
                        }
                    </tbody>
                </Table>
            </div>
        </div>
     );
}

export default MenProductDetail;