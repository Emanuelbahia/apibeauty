import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../reducers/cart/cartSlice";
import "./womenBrands.css";
import Loading from "../loading/Loading";

export default function WomenProductList({ data, loading, name }) {

    const { categoryId } = useParams();

    const dispatch = useDispatch();
    const { productList } = useSelector(state => state.cart);

    //cuando hago click lo ejecuto pasandole el productId, lo busco en todos los productos(data.find) y
    // lo dispacho para q se almacene en el store
    const addOrRemoveProduct = (productId) => {
        const product = data.find(product => product.id === productId);
        
        //busco en la lista de productos que he ido agregando, si esta el producto lo elimino, sino lo agrego
        //con esto no agrego 2 veces el mismo producto!! o lo agrego o lo elimino del carrito.
        if (productList.find(product => product.id === productId)) {
            dispatch(removeProductFromCart(productId));
        } else {
            dispatch(addProductToCart(product));
        }
    }       

    return ( 
        <div className="container-name-list">
            { name && <h2 className="h2-women">{ name } products list</h2>}
            { loading && <Loading/> }           
            <div className="div-list-products">                     
                {
                    data.map(p => {
                        return (
                            <div key={ p.id } className="div-list-products-men">
                                <p className="p-list-products-men">{ p.name.toLowerCase() }</p>
                                <img src= {`https://${ p.imageUrl }`} className="img-list-product" />
                                <button 
                                className={`button-cart ${productList.find(product => product.id === p.id) ? "red" : "green" }`} 
                                onClick={() => addOrRemoveProduct(p.id) } 
                                >
                                {productList.find(product => product.id === p.id) ? "Remove to cart" : "Add to cart"}
                                </button> 
                                <Link to={`/women/${categoryId}/${p.id}`} className="link-list-products" >
                                    More details
                                </Link>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
        );
}
