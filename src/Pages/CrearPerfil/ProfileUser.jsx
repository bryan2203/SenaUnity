import React, { useState } from 'react';
import  { Header } from '../../Layouts/Header/Header';
import '../CrearPerfil/ProfileUser.css'; // ✅ Mantén esto si tienes un archivo CSS





const ProfileUser = () => {
   //estado para manejar los datos del formulario
  const [formData, setFormData] =  useState({
    nombre: "",
    apellidos: "",
    cargo: "",
    edad: "",
    foto: null,
    descripcion: "",
  });



   //maneja los cambios que hacen los inputs de texto

  const handleChange =(e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
       ...prevState,
      [name] : value,
    }));
  };




  /*SUBIDA DE IMAGEN */


  const handleImageChange = (e) => {

    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        foto: URL.createObjectURL(file),
      }));
    };
  }


  //maneja el envio del formulario------------
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del perfil" , formData);
    
  };



  return (

    <div className='fondo-Profile'>
        <Header />


       <div className="divPrincipal">
                  <Header/>


                  {/* partecita para la imagen */}
                  <div className='profile-image'>
                    {formData.foto ? <img src={formData.foto} alt="perfil" /> : <div className='placeholder'> Agregar foto</div>}
                    <input type="file" accept= "image/*" onChange ={handleImageChange} />
                    <label className="boton-cargarimagen">
                      <input type="file" accept='image/*' onChange={handleImageChange} />
                      Seleccionar imagn

                    </label>

                  {/*parte de la descripcion */}
                  <textarea name="descripcion"
                   value={formData.descripcion}
                   onChange={handleChange}
                   placeholder='escribe una breve descripcion sobre ti...'
                   className='profile-description'
                   ></textarea>
                  </div>

                  {/*formulario*/}
                  <form onSubmit= {handleSubmit} className='profile-form'>
                    <h2>Crear perfil</h2>

                    <label>Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder='Nombre' />

                    <label>Apellido</label>
                    <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} placeholder="Apellido" />

                    <label>Cargo</label>
                    <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} placeholder="Cargo" />

                    <label>Edad</label>
                    <input type="number" name="edad" value={formData.edad} onChange={handleChange} placeholder="Edad" /> 

                    <button type= "submit"> Guardar</button>  
                    
                  </form>

                  {/* cambios */}
                  
       
                  
      </div>


      
      
      
    </div>
    
  );
};

export default ProfileUser;
