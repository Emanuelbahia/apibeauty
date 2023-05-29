import { useParams } from "react-router-dom";
import { useAxiosListNameProducts } from "../../hooks/useAxiosListNameProducts";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../reducers/cart/cartSlice";
import "./searchProducts.css"

//con el useParams obtengo la palabra que se busco en el search y la uso para listar todos los productos relacionados a esa palabra
export default function SearchProducts() {

    const { id } = useParams();
    const { data } = useAxiosListNameProducts(id);

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
        <>
            <div className="div-h2-search">
                <h2 className="h2-search-products">Products of {id} </h2>
            </div>
            <div className="container-products-search">           
                { data && (
                    data.map((p) => {
                        return (
                            <div key={ p.id } className="div-detail-search-product">
                                <h3 className="h3-search-products"> { p.name } </h3>
                                <img className="image-search-product" src= {`https://${ p.imageUrl }`} />                           
                                <h4 className="h4-search-product"><strong>Color:</strong> { p.colour }</h4>
                                <h4 className="h4-search-product"><strong>Price:</strong> USD { p.price.current.value }</h4>
                                <button 
                                className={`button-cart ${productList.find(product => product.id === p.id) ? "red" : "green" }`} 
                                onClick={() => addOrRemoveProduct(p.id) } 
                                >
                                {productList.find(product => product.id === p.id) ? "Remove to cart" : "Add to cart"}
                                </button> 
                            </div>                    
                        )}
                ))
                }
            </div>
        </>    
  )
}
