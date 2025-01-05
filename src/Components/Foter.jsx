import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Foter() {
  return (
    <CardGroup style={{width:"100%",marginTop:"30px"}}>
      <Card className='bg-primary '>
        <Card.Body>
          <Card.Title>Protection</Card.Title>
          <Card.Text>
            we wil provide 200% protection
          </Card.Text>
        </Card.Body>
        <Card.Footer >
          <small className="text-muted">latest technology</small>
        </Card.Footer>
      </Card >
      <Card className='bg-primary '>
        <Card.Body>
          <Card.Title>Location</Card.Title>
          <Card.Text>
            From Mardan in kpk
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='bg-primary '>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>
            Phon Namber : 03428151375 <br/> email : haroonkhanlala47@gmail.com
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Foter;