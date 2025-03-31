import React, { useState } from "react";
import "../Login/Login.css"; // Asegúrate de importar los estilos
import {Header} from '../../Layouts/Header/Header'
const Login = () => {
    const [formData, setFormData] = useState({
        registrarse: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario: ", formData);
    };

    return (

        

        
        <div className="divPrincipal">
            {/* Sección de Bienvenida */}


            <Header/>
            
            <div className="bienvenida">
                <h1 className="txt-Bienvenido">BIENVENIDO</h1>
                <p className="parrafoBienvenido">
                    Llega al SENA, la mejor plataforma de información
                </p>
                <button className="btn-leer">Leer más</button>
            </div>

            {/* Sección del Formulario */}
            <div className="Registro">
                <h2 className="txt-registrarse">Registrarse</h2>
                <form onSubmit={handleSubmit} className="mi-formulario">
                    <input
                        type="text"
                        name="registrarse"
                        placeholder="Usuario"
                        value={formData.registrarse}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                    <button type="submit" className="btn-IniciarSesion">
                        iniciar sesion
                    </button>
                </form>

                {/* Redes Sociales */}
                <div className="redes">
                    <span>f</span> <span>G+</span>
                </div>
            </div>
        </div>
        
    );
};

export default Login;
