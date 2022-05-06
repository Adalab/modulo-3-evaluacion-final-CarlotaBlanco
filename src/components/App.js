import '../styles/App.scss';
import React from 'react';
import getApiData from '../services/api';
import MovieSceneDetail from './MovieSceneDetail';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import LocalStorage from '../services/localStorage';
import NotFoundPage from './NotFoundPage';

function App() {
  const [dataMovies, setDataMovies] = useState(LocalStorage.get('movies', []));
  const [filterMovies, setFilterMovies] = useState('');

  const [filterYears, setFilterYears] = useState('todos');

  useEffect(() => {
    if (dataMovies.length === 0) {
      getApiData().then((dataClean) => {
        setDataMovies(dataClean);
      });
    }
  }, []);

  useEffect(() => {
    LocalStorage.set('movies', dataMovies);
  }, [dataMovies]);

  const handleFilterMovies = (value) => {
    setFilterMovies(value);
  };
  const handleFilterYears = (value) => {
    setFilterYears(value);
  };

  const handleNoSubmit = (ev) => {
    ev.preventDefault();
  };

  const moviesFilter = dataMovies
    .sort((a, b) => a.movie.localeCompare(b.movie))
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

  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);
  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataMovies.find((item) => item.id === movieId);

  return (
    <>
      <h1>Buscador de Wows</h1>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Filters
                handleFilterMovies={handleFilterMovies}
                years={getYear()}
                handleFilterYears={handleFilterYears}
                filterMovies={filterMovies}
                yearSearchValue={filterYears}
                handleNoSubmit={handleNoSubmit}
              />
              <MovieSceneList movieScenes={moviesFilter} />
            </>
          }
        />
        <Route
          path='/movie/:movieId'
          element={<MovieSceneDetail scene={movieFound} />}
        />
        <Route to='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
