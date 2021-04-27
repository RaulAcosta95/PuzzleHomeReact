import React from 'react';
import IconoLocalización from '../Images/iconoLocalización.png';
import PiezaRompecabezas from '../Images/Pieza de rompecabezas tipo portafolio.png';
import LogoCompañía from '../Images/Hermès-logo.png';

//Diseño
import './css/Carta.css';

function Carta(props) {
    return (
        <React.Fragment>
            <div className="Carta">
                    <img className="LogoCompañía" src={LogoCompañía} alt="Logo de la compañia"/>
                    <hr/>
                <div className="Info">
                    <p className="SegundoP"><b>Art Director</b></p>
                    <p className="TercerP"> <b>Hermès International S.A.</b> </p>
                    <img className="IconoLocalización" src={IconoLocalización} alt="Icono locación"/>
                    <p className="Localcion">Harrisburg, Pennsylvania</p>
                </div>
                <div className="Interactivo">
                        <div className="InfoDinero">
                            <p className="Dinero"><b>$1,240</b></p>
                            <p className="HiringReward">of hiring reward</p>
                        </div>                    
                        <img className="Icono" src={PiezaRompecabezas} alt="Pieza de rompecabezas tipo portafolio que se ilumina de azul y añade sombra azul"/>
                    </div>
            </div>
        </React.Fragment>
    )
    
}
export default Carta;