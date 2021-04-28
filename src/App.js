import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//Páginas
import IndexContainer from './Pages/Constructors/IndexContainer'
//Layout (Componentes repetidos)
import Layout from './Components/Layout';


function App()
{
    // return 'App';
    return (
        //Aquí todas las rutas con el switch
        <BrowserRouter>
            {/* <Layout> */}
                <Switch>
                    <Route exact path = "/"                     component = { IndexContainer } />
                </Switch>
            {/* </Layout> */}
        </BrowserRouter>
    );
}

export default App;
