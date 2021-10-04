import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

// Abrindo PR
function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
