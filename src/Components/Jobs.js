import React from 'react';
import IconoLocalización from '../Images/iconoLocalización.png';
import PiezaRompecabezas from '../Images/Pieza de rompecabezas tipo portafolio.png';
import LogoCompañía from '../Images/Hermès-logo.png';
function Jobs(props) {
 return(
     <React.Fragment>
          <div class="Recently">
                <p >RECENTLY ADDED JOBS:</p>
        </div>
        <div className="Empresas">
            <div className="Carta">
                <div className="LogoCompañía">
                    <img src={LogoCompañía} alt="Logo de la compañia"/>
                    <hr/>
                </div>
                <div className="Info">
                    <p><b>Art Director</b></p>
                    <p className="NombreCompañía"> <b>Hermès International S.A.</b> </p>
                    <img src={IconoLocalización} alt="Icono locación"/>
                    <p class="Localcion">Harrisburg, Pennsylvania</p>
                </div>
                <div class="Interactivo">
                        <div class="InfoDinero">
                            <p class="Dinero">$1,240</p>
                            <p class="HiringReward">of hiring reward</p>
                        </div>
                        <div class="Icono">
                            <img src={PiezaRompecabezas} alt="Pieza de rompecabezas tipo portafolio que se ilumina de azul y añade sombra azul"/>
                        </div>
                    </div>
            </div>
        </div>
     </React.Fragment>
 )   
}
export default Jobs;