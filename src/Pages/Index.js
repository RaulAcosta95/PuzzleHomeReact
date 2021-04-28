import React from 'react';
//Componentes
import MainSectionConstructor from '../Components/Constructors/MainSectionConstructor';
import JobsConstructor from '../Components/Constructors/JobsConstructor';
import HeaderConstructor from '../Components/Constructors/HeaderConstructor'
//Estilos
import './css/Index.css'
function Index(props) {
    return(
        <React.Fragment>
            <div className="Top">

            <HeaderConstructor/>
            <MainSectionConstructor/>
            </div>
            <JobsConstructor/>
        </React.Fragment>
    )
}
export default Index;