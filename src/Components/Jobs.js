import React from 'react';
import CartaConstructor from './Constructors/CartaConstructor';
//Diseño
import './css/Jobs.css';
function Jobs(props) {
 return(
     <React.Fragment>
        <div className="Empresas">
            <p className="PrimerP"><b>RECENTLY ADDED JOBS:</b></p>
            <CartaConstructor/>

        </div>
     </React.Fragment>
 )   
}
export default Jobs;