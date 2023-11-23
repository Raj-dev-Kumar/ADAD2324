import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { openContractCall } from '@stacks/connect';
import {
  bufferCV, UIntCV
} from '@stacks/transactions';
import { utf8ToBytes } from '@stacks/common';
import { userSession } from '../auth';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
const bytes = utf8ToBytes('foo'); 
const bufCV = bufferCV(bytes);

const genreBubbleStyle = {
  display: 'inline-block',
  borderRadius: '10px',
  backgroundColor: 'lightgreen',
  padding: '5px',
  margin: '5px',
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


const ratingBubbleStyle = {
  display: 'inline-block',
  backgroundColor: 'darkblue',
  color: 'white',
  borderRadius: '10px',
  fontWeight: 'bold',
  padding: '5px',
  margin: '5px',
};


export default function App() {
  let params = useParams();
  let [movies, setMovies] = useState([]);
  const [comment_index, setCommentIndex] = useState(0);

  const [loadingText, setLoadingText] = useState("Loading");
  let [isloading, setLoading] = useState(true);

  function handleClickUp() {
    setCommentIndex(comment_index + 1);
  }

  function handleClickDown() {
    setCommentIndex(comment_index - 1);
  }

  const getMovies = async () => {
    try {
      const response = await fetch(`http://localhost:3000/movies/${params.id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        },
      });
      
      const data = await response.json();
      setMovies(data);
      console.log(data)
      setLoading(false)

    } catch (error) {
      console.error('Error:', error);
    }
  }


  const submitMessage = async (e) => {
    e.preventDefault();
    
    const functionArgs = [
      bufCV
    ];
    
    const options = {
      contractAddress: 'STAZ0PNVXVHEM7R4XF5EZ4SS5JFM1ZMAJRPZGVK0',
      contractName: 'upper-teal-fox',
      functionName: 'test-emit-event',
      functionArgs: [],
      appDetails: {
        name: 'Movies App Rating',
        icon: window.location.origin + '/my-app-logo.svg',
      },
      onFinish: data => {
        console.log('Stacks Transaction:', data.stacksTransaction);
        console.log('Transaction ID:', data.txId);
        console.log('Raw transaction:', data.txRaw);


        //window.location.reload();
      },
    };

    const response = await openContractCall(options);
    
  };


  useEffect(() => {
    getMovies();
  }, [movies]);

  useEffect(() => {
    setLoading(true); // Set loading to true when params.id changes
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        switch (prevText) {
          case "Loading.":
            return "Loading..";
          case "Loading..":
            return "Loading...";
          default:
            return "Loading.";
        }
      });
    }, 500); // Update every 500 milliseconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [params.id]);

  if (isloading){
    return (
      <div className="container pt-5 pb-5">
        <h2>{loadingText}</h2>
      </div>
    );
  }
  else
  return (
    <div className="container pt-5 pb-5">
      <h2>Movie page - {movies[0].title}</h2>
      <p>{movies? movies.title : "a carregar"}</p>
      {console.log(movies)}
      <div>
    <Card style={{ width: '30rem' , backgroundColor: '#f7f7f7'}} className="mb-3">
    <Card.Body>
      <Card.Title>{movies[0].title.split("(")[0]}</Card.Title>
      <Card.Text>
        <p>
        <span style={{ fontWeight: 'bold' }}>
          Original Title:
        </span>
          {movies[0].title.split(/[()]/)[1] ? " " + movies[0].title.split(/[()]/)[1] : " " + movies[0].title.split("(")[0]}
        <br></br>
        <span style={{ fontWeight: 'bold' }}>
          Year: 
        </span> 
          {" " + movies[0].year}
        <br></br>
        <span style={{ fontWeight: 'bold' }}>        
          Genres:
        <br></br>
        {movies[0].genros.map((genre, index) => (
              <span key={index} style={getGenreBubbleStyle(genre)}>
                {genre}
              </span>
            ))}
        </span> 
        </p>
        <p>
          <span style={ratingBubbleStyle}>
              ⭐ Rating: {" " + movies[0].ratingMedio.toFixed(2)}/5 
          </span>
        </p>
      </Card.Text>
        <ButtonGroup>
          <Button 
            name="PrevButton" 
            href={"/movie/" + (parseInt(params.id)-1)} 
            disabled={(parseInt(params.id)-1)<=0? true : false} 
            variant="outline-secondary" 
            size="sm"
            style={{ fontWeight: 'bold' }}>
              Previous Movie
          </Button>
          <Button 
            name="NextButton"
            href={"/movie/" + (parseInt(params.id)+1)} 
            variant="outline-primary" 
            size="sm"
            style={{ fontWeight: 'bold' }}>
              Next Movie
            </Button>
        </ButtonGroup>
    </Card.Body>
    </Card>
    <div>
    {movies[0].comentario[0]!=null &&
    <Card
    style={{ width: '80rem' , height: '300px', backgroundColor: '#f7f7f7'}} 
    className="mb-3">
    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <div>
        <Card.Title>Comments:</Card.Title>
        <Card.Text>
          <p style={{ marginBottom: '10px' }}>{movies[0].comentario[comment_index]}</p>
        </Card.Text>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <ButtonGroup style={{ marginBottom: '10px' }}>
          <Button 
            name="PrevButton"  
            count={comment_index} 
            onClick={handleClickDown} 
            disabled={comment_index==0? true : false} 
            variant="outline-secondary" 
            size="sm" 
            style={{ width: '100px' , fontWeight: 'bold' }}>
              Previous
          </Button>
          <Button 
            name="NextButton" 
            count={comment_index} 
            onClick={handleClickUp} 
            disabled={movies[0].comentario[parseInt(comment_index+1)]==null? true : false} 
            variant="outline-primary" 
            size="sm" 
            style={{ width: '100px' , fontWeight: 'bold' }}>
              Next
          </Button>
        </ButtonGroup>
        <p style={{fontSize: '0.8em', color: '#555', fontWeight: 'bold' }}>{comment_index+1}/{movies[0].comentario.length}</p>
        </div>
    </Card.Body>
    </Card>
    }
    </div>
    </div>

      {userSession.isUserSignedIn() ? <a href="#" onClick={submitMessage }>Blockchain transaction</a> : null}
      </div>
  )
}