import React from 'react';
//Componentes (Repetidos)
import PiezaRompecabezas from '../Images/Pieza de rompecabezas tipo portafolio.png';
function Header(props) 
{  
    //Permite que funcione el switch de rutas
    return (
        <React.Fragment>
            <header>
                <img src={PiezaRompecabezas} alt="Pieza de rompecabezas tipo portafolio"/>
                <a href="">HOME</a>
                <a href="">ABOUT US</a>
                <a href="">BLOG</a>
                <a href="">HOW IT WORKS?</a>
                <button className="botonLogIn">LOG IN</button>
                <button className="botonSingUp">SING UP</button>
            </header>
        </React.Fragment>
    );
}

export default Header;