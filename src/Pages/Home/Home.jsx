import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { SectionHome } from '../../Layouts/SectionHome/SectionHome'
import '../Home/Home.css'

export const Home = () => {
  return (
    <div>
      <Header/>
    <SectionHome/>
    <div>
        <div className='divh1TextHome'>
        <h1>No te pierdas los <span  className='spanTxt'>eventos</span>  y novedades de tu <span className='spanTxt'>SENA</span> mas cercano</h1>

        </div>
    </div>
    </div>
  )
}
