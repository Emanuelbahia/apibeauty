import { Route, Routes, useParams } from 'react-router-dom';
import { useAxiosListProducts } from '../../hooks/useAxiosListProducts';
import WomenProductList from '../women/WomenProductList';
import WomenProductDetail from '../women/WomenProductDetail';

export default function CategoryWomen() {

    const { categoryId } = useParams();
    const { data, loading, name } = useAxiosListProducts(categoryId);

  return (
    <Routes>
      <Route index element= { <WomenProductList data= { data } loading={ loading } name={ name } /> } />
      <Route path=':productId' element={ <WomenProductDetail/> } />
    </Routes>
  )
}
