import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const genreBubbleStyle = {
  display: 'inline-block',
  backgroundColor: 'lightgreen',
  borderRadius: '10px',
  padding: '2px',
  margin: '2px',
};

const genreColorMap = {
  "Action": '#f3241f',
  "Drama": '#48a5fa', 
  "Comedy": '#ffa07a', 
  "Children's": '#4caf50', 
  "Thriller": '#f555f5', 
  "Sci-Fi": '#00ffff', 
  "Romance": '#FF4081', 
  "Adventure": '#FF6F61', 
  "Crime": '#bf6239',
  "Horror": '#7a7b8e', 
  "Musical": '#b1ff00', 
  "Documentary": '#87ceeb',  
  "Mystery": '#a165a1',
  "Animation": '#ffd700', 
};

function getGenreBubbleStyle(genre){
  return{
    ...genreBubbleStyle,
    backgroundColor: genreColorMap[genre] || 'lightgreen'
  }
}

function MovieCard(props) {
  return (
    <Card style={{ width: '18rem', backgroundColor: '#f7f7f7'}} className="mb-3">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Genres:
          <br></br>
          {props.genres.map((genre, index) => {
            return(
                <span key={index} style={getGenreBubbleStyle(genre)}>{genre} </span>
            )
          })}
        </Card.Text>
        <Card.Text>
          Year: {props.ano}
        </Card.Text>
        <Button href={"/movie/" + props._id} variant="outline-primary" style={{ display: 'flex' , alignItems: 'flex-end',  textAlign: 'center' , justifyContent: 'center'}}>Open Movie</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;