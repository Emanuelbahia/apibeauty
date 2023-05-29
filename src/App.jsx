import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import NotFound from "./pages/not found/NotFound";
import MenBrands from './components/men/MenBrands';
import WomenBrands from './components/women/WomenBrands';
import Face from './components/face/Face';
import FaceCategory from './components/face/FaceCategory';
import FaceBrands from './components/face/FaceBrands';
import FaceDetailProduct from './components/face/FaceDetailProduct';
import Search from './components/search/Search';
import SearchProducts from './components/search products/SearchProducts';
import Cart from './components/cart/Cart';


function App() {

  //poniendo el index, el primer componente que aparece en el home es el BodyHome, y con el Outlet van cambiando.
  return (
    <div>
      <Routes>
        <Route path='/' element= { <Home/> } >
           <Route index element= { <Search/> } />
           <Route path="register" element= { <Register/> } />
           <Route path="searchProducts/:id" element= { <SearchProducts/> } />
           <Route path="login" element= { <Login/> } />
           <Route path='cart' element= { <Cart/> } />
           <Route path='men/*' element= { <MenBrands/> } /> {/* con la /* puedo tener mas subrutas dentro de la ruta men */}
           <Route path='women/*' element= { <WomenBrands/> } />
           <Route path='face' element= { <Face/> } >
             <Route index element={ <FaceBrands/> } />
             <Route path=':categoryId' element= { <FaceCategory/> } />
             <Route path='product/:productId' element= { <FaceDetailProduct/> } />
           </Route>  
        </Route>
        <Route path='*' element= { <NotFound/> } />
      </Routes>
    </div>
  )
}

export default App
