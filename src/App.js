import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {

  const [theme, setTheme] = useState("dark")
  const toggleTheme = ()=> {
    setTheme(theme === 'dark' ? 'light': 'dark')
  }
  return (
    <div className={theme}>
      {/* nav bar */}
      <div className="menu">
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
          <button onClick={toggleTheme}>
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </nav>
      </div>

      {/* routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
