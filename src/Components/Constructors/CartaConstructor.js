import React from 'react';
import Carta from '../Carta';

class CartaConstructor extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="ContenedorCartas">

                </div>
                <Carta/>
            </React.Fragment>
        )
    }
}
export default CartaConstructor;