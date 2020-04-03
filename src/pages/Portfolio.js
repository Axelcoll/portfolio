import React from 'react';
import CardProyecto from '../components/CardProyecto'
import EDITORIAL1 from '../img/EDITORIAL1.jpg'


function Portfolio(props){
    return(
        <CardProyecto titulo="Mi titulo" descripcion="asd" img={EDITORIAL1}/>
    )
}


export default Portfolio;