import React from 'react';
//Componentes (Repetidos)
import HeaderConstructor from './Constructors/HeaderConstructor';

function Layout(props) 
{  
    //Permite que funcione el switch de rutas
    return (
        <React.Fragment>
            {/* <HeaderConstructor />
            {props.children} */}
        </React.Fragment>
    );
}

export default Layout;