import React from 'react';
//Componentes (Repetidos)

function Layout(props) 
{  
    //Permite que funcione el switch de rutas
    return (
        <React.Fragment>
            <header>
                <img src="./Img/Pieza de rompecabezas tipo portafolio.png" alt="Pieza de rompecabezas tipo portafolio"/>
                <a href="">HOME</a>
                <a href="">ABOUT US</a>
                <a href="">BLOG</a>
                <a href="">HOW IT WORKS?</a>
                <button class="botonLogIn">LOG IN</button>
                <button class="botonSingUp">SING UP</button>
            </header>
                    
        </React.Fragment>
    );
}

export default Layout;