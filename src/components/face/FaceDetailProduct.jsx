import { useAxiosDetailProduct } from "../../hooks/useAxiosDetailProduct";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import "./face.css"
import Loading from "../loading/Loading";

function FaceDetailProduct() {

    const { productId } = useParams();
    const { data, dataImages, price, loading } = useAxiosDetailProduct(productId)

    return ( 
        <div className="container-name-list">
            {data && <p className="product-name-face"> {data.name} </p>}
            { loading && <Loading/> }             
            <div className="container-product-detail">                   
                <div className="container-image-product">
                    { 
                        dataImages.map(p => {
                            return (
                                <img className="image-product" key={ p.url } src={`https://${p.url}`} />
                            )})                  
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

export default FaceDetailProduct;