import React from 'react';
import movies from './data';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
