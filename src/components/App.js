import '../styles/App.scss';
import getApiData from '../services/api';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  useEffect(() => {
    getApiData().then((dataClean) => {
      console.log(dataClean);
      setDataMovies(dataClean);
    });
  }, []);

  return (
    <div className='App'>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        alias fuga odio odit atque expedita assumenda numquam quidem,
        voluptatibus facere ullam eos quos iusto beatae sit perspiciatis dolore
        laudantium minus.
      </p>
    </div>
  );
}

export default App;
