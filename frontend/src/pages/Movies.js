import React, { Component } from 'react';
import axios from 'axios';  // Import axios library
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';


import MovieCard from '../components/MovieCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

  getMovies = async () => {
    this.setState({ loading: true });
    try {
      const response = await axios.get('http://localhost:3000/movies', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.data) {
        throw new Error('Network response was not ok');
      }

      this.setState({ movies: response.data, loading: false });
    } catch (error) {
      console.error('Error:', error);
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="container pt-5 pb-5">
        <h2>Movies</h2>
        <CardGroup>
          <Row xs={1} md={2} className="d-flex justify-content-around">
            {movies.map((movie) => (
              <MovieCard key={movie._id} {...movie} />
            ))}
          </Row>
        </CardGroup>
      </div>
    );
  }
}

export default App;
