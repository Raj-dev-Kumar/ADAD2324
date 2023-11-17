import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard(props) {
  return (
    <Card style={{ width: '18rem' }} className="mb-3">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Genres: 
          {props.genres.map((genre, index) => {
            return(
                <span key={index}>{genre} </span>
            )
          })}
        </Card.Text>
        <Card.Text>
          Year: {props.year}
        </Card.Text>
        <Button href={"/movie/" + props._id} variant="outline-primary">Open Movie</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;