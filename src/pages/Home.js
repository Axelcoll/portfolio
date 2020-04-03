import React from 'react'
import Menu from '../components/Menu'
import Portada from '../img/Portada.jpg'
import './styles/Home.css'
import Button from 'react-bootstrap/Button'



function Home(props) {
    
            return(
                <div className="Prueba">
                    <div>
                        <img className="Portada" src={Portada} alt="Portada"/>
                        <Menu/>

                    </div>
                    <div className="Contenedor">
                        <h1 className="Bienvenido">BIENVENIDO <br/>A MI SITIO WEB</h1>
                        <p className="Descripcion">Mi nombre es Axel Collante y soy Diseñador Gráfico, aquí podrás encontrar <br/> todos mis proyectos e información sobre mi.</p>
                    <div>
                        <Button className="MasInfo" variant="outline-secondary" size="">MÁS INFO</Button>
                    </div>
                    </div>



                </div>
               
                    
                
                    )
            
  
}

export default Home;