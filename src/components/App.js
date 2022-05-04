import '../styles/App.scss';
import getApiData from '../services/api';
import { useState, useEffect } from 'react';
import React from 'react';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState('');
  useEffect(() => {
    getApiData().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);

  const handleFilterMovies = (value) => {
    setFilterMovies(value);
  };
  const moviesFilter = dataMovies.filter((movie) => {
    return movie.movie.toLowerCase().includes(filterMovies.toLowerCase());
  });

  return (
    <>
      <Filters handleFilterMovies={handleFilterMovies} />
      <MovieSceneList movieScenes={moviesFilter} />
    </>
  );
}

export default App;
