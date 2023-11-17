import React, {useState, useEffect} from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

import MovieCard from "../components/MovieCard";

export default function App() {
  let [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        },
      });
      
      const data = await response.json();
      setMovies(data);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container pt-5 pb-5">
        <h2>Movies</h2>
        <CardGroup>
            <Row xs={1} md={2} className="d-flex justify-content-around">
            {movies && movies.map((movie) => {
                return (
                    <MovieCard 
                        key={movie._id} 
                        {...movie}
                    />
                );
            })}
            </Row>
        </CardGroup>
    </div>
  )
}