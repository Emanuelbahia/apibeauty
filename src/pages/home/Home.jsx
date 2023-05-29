import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./home.css"

//en el home siempre van a estar fijos el home y el footer
//con el Outlet voy cambiando el body con distintos componentes

function Home() {
    return ( 
        <div className="container-home">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
     );
}

export default Home;