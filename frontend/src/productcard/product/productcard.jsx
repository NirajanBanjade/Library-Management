import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookCard(props) {
  const { imageLink, title, author, year } = props;

  return (
      <Card className="bg-light p-3 shadow rounded d-flex flex-fill h-100 cardContainer" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageLink} alt="Book Cover" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <strong>Author:</strong> {author} <br />
                <strong>Year:</strong> {year}
              </Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
  );
}

export default BookCard;
