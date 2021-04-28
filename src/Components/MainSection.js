import React from 'react';
import IconoBusqueda from '../Images/Icono de busqueda naranja.png';
import DosPersonasImagen from '../Images/Imagen dos personas dandose la mano.png';
import RemplazoImagen from '../Images/Agreement-amico.svg';
//Estilos
import './css/MainSection.css';
import './css/MainSectionGrid.css';
function MainSection(props) 
{  
    //Permite que funcione el switch de rutas
    return (
        <React.Fragment>
            <section className="Main">
                    <p className="PrimerP"><b>INNOVATIVE SOLUTION FOR SOURCING CANDIDATES</b></p>
                    <p className="SegundoP">Help us find <b>the missing puzzle, <br/> get rewarded</b> properly.</p>
                    <form className="Form">
                        <input className="FormInput" type="text" placeholder="Keyword, job title or company"/>
                        <button className="FormButton" type="submit"><img className="LogoBusqueda" src={IconoBusqueda} alt="Icono de busqueda naranja"/></button>
                    </form>
                    <img className="MainImagen" src={DosPersonasImagen} alt="Imagen dos personas dandose la mano, representa un acuerdo, hay dinero, un contrato de fondo y una lupa en el contrato que representa detalles"/>
                    {/* <img className="MainImagen" src={RemplazoImagen} alt="Imagen dos personas dandose la mano, representa un acuerdo, hay dinero, un contrato de fondo y una lupa en el contrato que representa detalles"/> */}

            </section>

        </React.Fragment>
    );
}

export default MainSection;