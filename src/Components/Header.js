import React from 'react';
//Componentes (Repetidos)
import PiezaRompecabezas from '../Images/Pieza de rompecabezas tipo portafolio.png';
//Estilos
import './css/Header.css';
import './css/HeaderGrid.css'
function Header(props) 
{  
    //Permite que funcione el switch de rutas
    return (
        <React.Fragment>
            <header className="Header">
                <img className="PiezaRompecabezas" src={PiezaRompecabezas} alt="Pieza de rompecabezas tipo portafolio"/>
                <button class="BotonMenúDesplegable">
                    {/* <i class="">---</i> */}
                </button>
        {/* <!-- Los links --> */}
        {/* CAMBIAR A POR <LINK /> */}
                <nav class="MenúDesplegable">
                    <ul>
                        {/* <li><p>Menú</p></li> */}
                        <li><a className="Home2" href="">HOME</a></li>
                        <li><a className="AboutUs2" href="">ABOUT US</a></li>
                        <li><a className="Blog2" href="">BLOG</a></li>
                        <li><a className="HowItWorks2" href="">HOW IT WORKS?</a></li>
                        <button className="Boton11">LOG IN</button>
                        <button className="Boton22">SING UP</button>
                    </ul>
                </nav>
                    <a className="Home" href="">HOME</a>
                    <a className="AboutUs" href="">ABOUT US</a>
                    <a className="Blog" href="">BLOG</a>
                    <a className="HowItWorks" href="">HOW IT WORKS?</a>
                    <button className="Boton1">LOG IN</button>
                    <button className="Boton2">SING UP</button>
                    
            </header>
        </React.Fragment>
    );
}

export default Header;