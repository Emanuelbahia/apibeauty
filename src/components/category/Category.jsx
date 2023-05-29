//useParams me permite acceder a los parametros q se pasan por la ruta
import { useParams, Routes, Route } from "react-router-dom";
import { useAxiosListProducts } from "../../hooks/useAxiosListProducts";
import "./category.css"
import MenProductsList from "../men/MenProductsList";
import MenProductDetail from "../men/MenProductDetail";

function Category() {

    
    const { categoryId } = useParams();
    const { data, loading, name } = useAxiosListProducts(categoryId) 
 
    //en esta pagina lo primero que me aparece es la lista de productos de la categoria seleccionada
    //y cuando hago click en un producto veo el detalle del producto.
    return (
      <Routes>
          <Route index element={ <MenProductsList  data={ data } loading={ loading } name={ name } /> } /> 
          <Route path=":productId" element={ <MenProductDetail /> } />    
      </Routes>
     );
}

export default Category;
