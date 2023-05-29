import { useAxiosBrands } from "../../hooks/useAxiosBrands";
import { Routes, Route } from "react-router-dom";
import "./menBrands.css"
import MenCategory from "./MenCategory";
import Category from "../category/Category";

//en esta pagina estan todas las marcas para hombres (menCategory) 
//y cuando hago click en una, me aparecen los productos de esa marca (category)
function MenBrands() {

     const { dataMen, loading } = useAxiosBrands();
     
    return ( 
        <Routes>
            <Route index element={ <MenCategory dataMen= {dataMen} loading= {loading}  /> } />
            <Route path=":categoryId/*" element={ <Category/> } />                       
        </Routes>    
     );
}

export default MenBrands;