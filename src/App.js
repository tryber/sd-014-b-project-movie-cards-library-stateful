import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
