import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.n
import React from 'react';
import Card from 'react-bootstrap/Card';
const Player = ({Name , Nationality ,Number, team ,age , photo }) =>
{
  return ( <div>
    <Card style={{ width: '18rem', marginBottom:'20px' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
         <strong>Nationality:</strong>{Nationality} <br/>
         <strong>Number:</strong>{Number} <br/>
         <strong>team:</strong>{team} <br/>
         <strong>age:</strong>{age} 
        
        </Card.Text>
            </Card.Body>
    </Card>
    </div>
  );
}

export default Player;