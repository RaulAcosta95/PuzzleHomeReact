import React from 'react';
import IconoBusqueda from '../Images/Icono de busqueda naranja.png';
import DosPersonasImagen from '../Images/Imagen dos personas dandose la mano.png';

function MainSection(props) 
{  
    //Permite que funcione el switch de rutas
    return (
        <React.Fragment>
            <section className="main">
                <div className="info">
                    <p className="innovate"><b>INNOVATIVE SOLUTION FOR SOURCING CANDIDATES</b></p>
                    <p className="helpUsFind">Help us find <b>the missing puzzle, <br/> get rewarded</b> properly.</p>
                    <form>
                        <input type="text" placeholder="Keyword, job title or company"/>
                        <button type="submit"><img className="LogoBusqueda" src={IconoBusqueda} alt="Icono de busqueda naranja"/></button>
                    </form>
                </div>
                <img className="DosPersonasDandoseLaMano" src={DosPersonasImagen} alt="Imagen dos personas dandose la mano, representa un acuerdo, hay dinero, un contrato de fondo y una lupa en el contrato que representa detalles"/>
            </section>

        </React.Fragment>
    );
}

export default MainSection;