import React from 'react';
//Componentes (Repetidos)
import HeaderContainer from './Constructors/HeaderContainer';

function Layout(props) 
{  
    //Permite que funcione el switch de rutas
    return (
        <React.Fragment>
            <HeaderContainer />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;