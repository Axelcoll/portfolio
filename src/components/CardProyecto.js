import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import EDITORIAL1 from '../img/EDITORIAL1.jpg'

function CardProyecto(props){
    
  /*const {titulo, descripcion, img} = this.props*/
    return(
       /* <Card style={{ width: '40rem' }}>
  <Card.Img variant="top" src={EDITORIAL1} />
  <Card.Body>
    <Card.Title>{titulo}</Card.Title>
    <Card.Text>
      {descripcion}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */
    <div>
        <img alt="hola">{this.props.img}</img>
        <h1>{this.props.titulo}</h1>
        <p>{this.props.descripcion}</p>
        
    </div>

)
}

export default CardProyecto;