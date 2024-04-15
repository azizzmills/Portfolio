import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card_Display({title, text, url, pic}) {

  const [isHovered, setIsHovered] = useState(false);

  const gradientStyle ={
    background : 'linear-gradient(to top, blue, orange)',
    boxShadow : isHovered ? '0 0 10px 0 rgba(255, 255, 255, 0.5)' : 'none', 
    fontStyle : 'italic'
  }
  return (
    <Card style={{ width: '18rem', boxShadow : '0.5px 0.5px 4px 2px white' }}>
      <Card.Img variant="top" src={pic} alt='picture' style={{
        objectFit:'cover',
        width:'100%',
        height: '250px'
      }}/>
      <Card.Body style={{backgroundColor:'blue', color: 'white'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <a href={url} target='_blank'>
          <Button 
          style={gradientStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            Visit Site
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Card_Display;