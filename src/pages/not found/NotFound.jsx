import { FaStar } from "react-icons/fa";
import "./notFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-notfound">
        <FaStar className="star1"/>
        <FaStar className="star2"/>
        <FaStar className="star3"/>
        <FaStar className="star4"/>
        <FaStar className="star5"/>
        <FaStar className="star6"/>
        <FaStar className="star7"/>
        <FaStar className="star8"/>
        <FaStar className="star9"/>
        <FaStar className="star10"/>
        <FaStar className="star11"/>
        <FaStar className="star12"/>
        <FaStar className="star13"/>
        <div className="container-numbers-moon">
            <h2 className="h2-number-moon">4</h2>
            <div className="moon">

            </div>
            <h2 className="h2-number-moon">4</h2>
        </div>
        <h3 className="h3-notfound">PAGE NOT FOUND</h3>
        <h3 className="h3-error">The page you are looking is not available</h3>
        <button className="button-back-home"><Link style={{textDecoration:"none", color:"rgb(232, 234, 95)"}} to="/">Back to home</Link></button>
    </div>
  )
}