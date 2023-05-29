import { useAxiosListProducts } from "../../hooks/useAxiosListProducts";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../reducers/cart/cartSlice";
import "./face.css"
import Loading from "../loading/Loading";

function FaceCategory() {

    const { categoryId } = useParams();
    const { data, loading, name } = useAxiosListProducts(categoryId);

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
            { name && <h2 className="h2-face">{ name } products list</h2>}
            { loading && <Loading/> }           
            <div className="container-list-face-products">           
                {
                    data.map(p => {
                        return (
                            <div key={ p.id } className="div-list-products-men">
                                <p className="p-list-products-men" key={ p.id } > { p.name } </p>
                                <img src= {`https://${ p.imageUrl }`} className="img-list-product" />
                                <button 
                                    className={`button-cart ${productList.find(product => product.id === p.id) ? "red" : "green" }`} 
                                    onClick={() => addOrRemoveProduct(p.id) } 
                                    >
                                    {productList.find(product => product.id === p.id) ? "Remove to cart" : "Add to cart"}
                                </button>
                                <Link to={`/face/product/${p.id}`} className="link-list-products" >
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

export default FaceCategory;