import React from "react";
import { Header } from "../../Layouts/Header/Header";
import { SectionHome } from "../../Layouts/SectionHome/SectionHome";
import Slider from "../Slider/Slider";
import Oportunidades from "../../components/Oportunidades/Oportunidades";
import InstrucFuncionarios from "../../Layouts/InstrucFuncionarios/InstrucFuncionarios";
import NuestrasSedes from "../../Layouts/NuestrasSedes/NuestrasSedes";
import imgUsuario from '../../assets/images/imgUsuario.png';
import "../Home/Home.css";

export const Home = () => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;1000&display=swap" rel="stylesheet" />
      <Header />
      <div className="top-section">
        <h1 className="h1Bienvenidos">BIENVENIDOS</h1>
        <button className="button-ingresar">
          <div className="ingresar-wrapper">
            <img src={imgUsuario} alt="Usuario" />
            <span className="ingresar-text">Ingresar</span>
          </div>
        </button>
      </div>
      <div className="home-container">
        <div className="text-container">
          <SectionHome />
        </div>
        <Slider />
      </div>
      <Oportunidades />
      <InstrucFuncionarios />
      <NuestrasSedes />
    </div>
  );
};
