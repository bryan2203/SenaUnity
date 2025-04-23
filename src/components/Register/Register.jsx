import React, { useState } from "react";
import { Header } from '../../Layouts/Header/Header';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    password: "",
    rol: "estudiante"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro: ", formData);
  };

  return (
    <div className="divmayor">
      <div className="HeaderDiseñoRegistro">
        <Header />
      </div>

      <div className="divPrincipal">
        {/* Sección de Bienvenida */}
        <div className="bienvenida">
          <h1 className="txt-Bienvenido">BIENVENIDO</h1>
          <p className="parrafoBienvenido">
            Llega al SENA, la mejor plataforma de información
          </p>
          <button className="btn-leer">Leer más</button>
        </div>

        {/* Formulario de Registro */}
        <div className="Registro">
          <h2 className="txt-registrarse">Crear cuenta</h2>
          <form onSubmit={handleSubmit} className="mi-formulario">
            
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
            <select
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="estudiante">Estudiante</option>
              <option value="Instructor">Instructor</option>
              <option value="Funcionario">Funcionario</option>
            </select>

            <button type="submit" className="btn-IniciarSesion">
              Registrarse
            </button>
          </form>

          {/* Redes Sociales */}
          <div className="redes">
            <span>f</span> <span>G+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
