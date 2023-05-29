import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { RiMenuLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./header.css"

function Header() {

    const { totalCount } = useSelector(state => state.cart);

    return ( 
        <div className='container-header'>
            <div className='container-logo-title'>
                <span className='font-logo'>AB</span>
                <Link to="/" className='no-line' ><h1 className='font-h1'>Api Beauty</h1></Link> 
            </div>
            <div className='container-menu-cart'>
                <Dropdown className='dropdown'>
                    <Dropdown.Toggle className='menu' variant="light" id="dropdown-basic">
                        <RiMenuLine style={{ color: "black"}} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Link to="men" className='no-line'> <Dropdown.Item href="#/action-1">Men</Dropdown.Item> </Link>
                        <Link to="women" className='no-line'> <Dropdown.Item href="#/action-2">Women</Dropdown.Item> </Link>
                        <Link to="face" className='no-line'> <Dropdown.Item href="#/action-3">Face and body</Dropdown.Item> </Link>
                        <Link to="register" className='no-line'> <Dropdown.Item href="#/action-4">Register</Dropdown.Item> </Link>
                        <Link to="login" className='no-line'> <Dropdown.Item href="#/action-5">Login</Dropdown.Item> </Link>
                    </Dropdown.Menu>
                </Dropdown>  
                
            <div className='wraper-links'>
                <Link to="men" className='h4-link-header'>
                    men
                </Link>
                <Link to="women" className='h4-link-header'>
                    women
                </Link>
                <Link to="face" className='h4-link-header'>
                    face and body
                </Link>
                <Link to="register" className='h4-link-header'>
                    register
                </Link>
                <Link to="login" className='h4-link-header'>
                    login
                </Link>
            </div> 
            <div className='div-cart'>
                    <span className='count-cart'>{ totalCount }</span>
                    <Link to="cart">
                        <span className='icon-cart'><BsCart3/></span>
                    </Link>
                </div>
            </div>   
        </div>
     );
}

export default Header;