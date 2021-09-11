import React from 'react';
import Data from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ Data } />
    </div>
  );
}

export default App;
