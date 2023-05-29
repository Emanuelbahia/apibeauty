import { useAxiosBrands } from "../../hooks/useAxiosBrands";
import { Routes, Route } from "react-router-dom";
import "./womenBrands.css"
import WomenCategory from "./WomenCategory";
import CategoryWomen from "../category/CategoryWomen";

//en esta pagina se muestran todas las marcas para mujeres
function WomenBrands() {

    const { dataWomen, loading } = useAxiosBrands();

    return ( 
        <Routes>
            <Route index element= { <WomenCategory dataWomen= { dataWomen } loading= { loading } /> }  />
            <Route path=":categoryId/*" element={ <CategoryWomen/> } />
        </Routes>
     );
}

export default WomenBrands;