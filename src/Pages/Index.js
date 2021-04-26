import React from 'react';
//Componentes
import MainSectionConstructor from '../Components/Constructors/MainSectionConstructor';
import JobsConstructor from '../Components/Constructors/JobsConstructor';
//Estilos
import './css/Index.css'
function Index(props) {
    return(
        <React.Fragment>
            <MainSectionConstructor/>
            <JobsConstructor/>
        </React.Fragment>
    )
}
export default Index;