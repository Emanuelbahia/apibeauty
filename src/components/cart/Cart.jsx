import Table from 'react-bootstrap/Table';
import { BsFillTrash3Fill } from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../reducers/cart/cartSlice';
import "./cart.css";

export default function Cart() {

    const { productList } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const removeProduct = (productId) => dispatch(removeProductFromCart(productId));
    
  return (
    <div className='container-table-cart'>
        <h2 className='product-cart-h2'>Products cart</h2>
        <Table striped bordered hover style={{margin:0, maxWidth:"1000px"}}>
            <thead>
                <tr>
                <th>Product name</th>
                <th className='align'>Amount</th>
                <th className='align'>Remove</th>
                <th className='align'>Price</th>
                </tr>
            </thead>
            <tbody>
                { productList.map(p => {
                    return (
                        <tr key={ p.id } >
                        <td>{ p.name }</td>
                        <td className='align'>1</td>                             
                        <td className='align'><BsFillTrash3Fill style={{color:"red"}} onClick={() => removeProduct(p.id)} /></td>
                        <td className='align'>{p.price.current.value} </td>
                        </tr>
                    )})               
                }  
                <tr>
                    <td colSpan={3}>Total</td>
                    <td className='align'>{productList.reduce((acc, product) => acc + product.price.current.value, 0)}</td>
                </tr>            
            </tbody>
        </Table>
    </div>
  )
}
