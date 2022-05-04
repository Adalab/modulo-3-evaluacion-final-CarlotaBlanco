import '../styles/App.scss';
import getApiData from '../services/api';
import { useState, useEffect } from 'react';
import React from 'react';
import MovieSceneList from './MovieSceneList';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  useEffect(() => {
    getApiData().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);

  return (
    <>
      <MovieSceneList movieScenes={dataMovies} />
    </>
  );
}

export default App;
