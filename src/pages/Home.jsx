import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
const imgPath = 'https://image.tmdb.org/t/p/w500/';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [selectedMovie, setSelectedMovie] = useState("");

  const url = 'https://api.themoviedb.org/3/';

  const fetchMovie = async () => {
    const type = searchKey ? 'search/movie' : 'trending/all/day';

    const data = await fetch(
      `${url}${type}?api_key=f6521014ff685673aa729f8f9bfeadbb&query=${searchKey}`
    );
    const response = await data.json();
    console.log(response.results);
    setMovies(response.results);
    setSelectedMovie(response.results[0]);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  // searching for movies
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovie(searchKey);
  };

  return (
    <>
      {/* header */}
      <header className="wrapper">
        <h2>nFlix App</h2>
        <form onSubmit={searchMovies}>
          <input
            type="text"
            placeholder="Enter Movie Name"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button className="btn-primary">Search</button>
        </form>
      </header>

      {/* banner section */}
      <div
        className="hero wrapper"
        style={{
          backgroundImage: `url(${imgPath}${selectedMovie.backdrop_path} )`,
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title"> {selectedMovie.title}</h1>
          <div className="hero-text">{selectedMovie.overview}</div>
        </div>
      </div>

      {/* card section */}
      <div className="container wrapper">
        {movies.map((movie) => (
          <div>
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
