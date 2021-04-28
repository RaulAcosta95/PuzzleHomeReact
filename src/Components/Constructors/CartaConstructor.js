import React from 'react';
import Carta from '../Carta';

//Grid
import '../css/CartasGrid.css';
class CartaConstructor extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="ContenedorCartas">
                    <Carta/>

                </div>
            </React.Fragment>
        )
    }
}
export default CartaConstructor;