import '../styles/App.scss';
import getApiData from '../services/api';
import { useState, useEffect } from 'react';
import React from 'react';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState('');
  const [filterYears, setFilterYears] = useState('todos');
  useEffect(() => {
    getApiData().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);

  const handleFilterMovies = (value) => {
    setFilterMovies(value);
  };
  const handleFilterYears = (value) => {
    setFilterYears(value);
  };

  const moviesFilter = dataMovies
    .filter((movie) => {
      return movie.movie.toLowerCase().includes(filterMovies.toLowerCase());
    })
    .filter((movie) => {
      if (filterYears === 'todos') {
        return true;
      } else {
        return filterYears.includes(movie.year);
      }
    });

  const getYear = () => {
    const allYears = dataMovies.map((scene) => scene.year);
    const noRepeatYears = allYears.filter((year, index) => {
      return allYears.indexOf(year) === index;
    });
    return noRepeatYears.sort();
  };

  return (
    <>
      <Filters
        handleFilterMovies={handleFilterMovies}
        years={getYear()}
        handleFilterYears={handleFilterYears}
      />
      <MovieSceneList movieScenes={moviesFilter} />
    </>
  );
}

export default App;
