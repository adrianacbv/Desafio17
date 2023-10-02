/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Tags from './Tags.jsx';

function MyCard(props) {
  return (
    <Card style={{ width: '18rem', marginRight: '1rem' }}>
      <Card.Img orientation="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text style={{ fontSize: '12px' }}>{props.descripcion}</Card.Text>
        <Tags color={props.tagColor} nombre={props.tagNombre} />
      </Card.Body>
    </Card>
  )
}

export default MyCard