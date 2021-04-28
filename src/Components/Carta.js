import React from 'react';
import IconoLocalización from '../Images/iconoLocalización.png';
import PiezaRompecabezas from '../Images/Pieza de rompecabezas tipo portafolio.png';
import LogoCompañía from '../Images/Hermès-logo.png';

//Extras que luego voy a cambiar por state de api
import LogoCompañía2 from '../Images/Coca-Cola_logo.png'
import LogoCompañía3 from '../Images/Dropbox-Logo-2013.jpg'
import LogoCompañía4 from '../Images/mcdonalds-logo-1280x720.jpg'
import LogoCompañía5 from '../Images/LogoOtraCosa.png'

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
                <p class="Extra"><b>Be the first one to recommend!</b></p>
            </div>
            <div className="Carta">
                    <img className="LogoCompañía" src={LogoCompañía2} alt="Logo de la compañia"/>
                    <hr/>
                <div className="Info">
                    <p className="SegundoP"><b>HR Head of Operations</b></p>
                    <p className="TercerP"> <b>The Coca-Cola Company</b> </p>
                    <img className="IconoLocalización" src={IconoLocalización} alt="Icono locación"/>
                    <p className="Localcion">Atlanta, Georgia</p>
                </div>
                <div className="Interactivo">
                        <div className="InfoDinero">
                            <p className="Dinero"><b>$1,980</b></p>
                            <p className="HiringReward">of hiring reward</p>
                        </div>                    
                        <img className="Icono" src={PiezaRompecabezas} alt="Pieza de rompecabezas tipo portafolio que se ilumina de azul y añade sombra azul"/>
                </div>
                <p class="Extra"><b>Be the first one to recommend!</b></p>
            </div>
            <div className="Carta">
                    <img className="LogoCompañía" src={LogoCompañía3} alt="Logo de la compañia"/>
                    <hr/>
                <div className="Info">
                    <p className="SegundoP"><b>Business Strategy Associate</b></p>
                    <p className="TercerP"> <b>Dropbox, Inc.</b> </p>
                    <img className="IconoLocalización" src={IconoLocalización} alt="Icono locación"/>
                    <p className="Localcion">San Francisco, California</p>
                </div>
                <div className="Interactivo">
                        <div className="InfoDinero">
                            <p className="Dinero"><b>$3,100</b></p>
                            <p className="HiringReward">of hiring reward</p>
                        </div>                    
                        <img className="Icono" src={PiezaRompecabezas} alt="Pieza de rompecabezas tipo portafolio que se ilumina de azul y añade sombra azul"/>
                </div>
                <p class="Extra"><b>Be the first one to recommend!</b></p>
            </div>
            <div className="Carta">
                    <img className="LogoCompañía" src={LogoCompañía4} alt="Logo de la compañia"/>
                    <hr/>
                <div className="Info">
                    <p className="SegundoP"><b>Financial Analyst</b></p>
                    <p className="TercerP"> <b>Mcdonald's Corporation</b> </p>
                    <img className="IconoLocalización" src={IconoLocalización} alt="Icono locación"/>
                    <p className="Localcion">Columbus, Ohio</p>
                </div>
                <div className="Interactivo">
                        <div className="InfoDinero">
                            <p className="Dinero"><b>$2,600</b></p>
                            <p className="HiringReward">of hiring reward</p>
                        </div>                    
                        <img className="Icono" src={PiezaRompecabezas} alt="Pieza de rompecabezas tipo portafolio que se ilumina de azul y añade sombra azul"/>
                </div>
                <p class="Extra"><b>Be the first one to recommend!</b></p>
            </div>
            <div className="Carta">
                    <img className="LogoCompañía" src={LogoCompañía5} alt="Logo de la compañia"/>
                    <hr/>
                <div className="Info">
                    <p className="SegundoP"><b>Otra Cardr</b></p>
                    <p className="TercerP"> <b>Otra Card</b> </p>
                    <img className="IconoLocalización" src={IconoLocalización} alt="Icono locación"/>
                    <p className="Localcion">Otra Card</p>
                </div>
                <div className="Interactivo">
                        <div className="InfoDinero">
                            <p className="Dinero"><b>$1,240</b></p>
                            <p className="HiringReward">of hiring reward</p>
                        </div>                    
                        <img className="Icono" src={PiezaRompecabezas} alt="Pieza de rompecabezas tipo portafolio que se ilumina de azul y añade sombra azul"/>
                </div>
                <p class="Extra"><b>Be the first one to recommend!</b></p>
            </div>
        </React.Fragment>
    )
    
}
export default Carta;