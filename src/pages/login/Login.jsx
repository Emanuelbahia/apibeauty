import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

    const navigate = useNavigate();
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let email = "emanuel@gmail.com";
        let password = 123456
     
        //si el email y la contraseña concuerdan se redirige al home
        if ( email === inputEmail.current.value && password === inputPassword.current.value ) {
            navigate("/");
        }       
    } 

    return ( 
        <div className="container-login">
            <div className="absoluteLogin">
                <form className="form-login" onSubmit={ handleSubmit }>
                    <label className="label-login" htmlFor="" >Email</label>
                    <input className="input-login" type="text" name="" ref={ inputEmail } />

                    <label className="label-login" htmlFor="" >Password</label>
                    <input className="input-login" type="password" name="" ref={ inputPassword } />

                    <button className="button-login">Login</button>
                </form>
            </div>
        </div>
     );
}

export default Login;