import React from 'react'
import imgUsuario from '../../assets/images/imgUsuario.png'
import '../SectionHome/SectionHome.css'

export const SectionHome = () => {
  return (
    <div>
        <section className='SectionHome'>
            <div>
            <h1 className='h1Bienvenidos'>BIENVENIDOS</h1>
            </div>
    {/* ------------------------------------- */}
            <div className='divimgUsuario'>
            <button className='buttonIngrsar'>
            <img src={imgUsuario} alt="" />
            Ingresar
            </button>
           
            </div>
        </section>
        
    </div>
  )
}
