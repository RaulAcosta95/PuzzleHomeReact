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