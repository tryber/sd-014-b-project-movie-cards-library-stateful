import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
