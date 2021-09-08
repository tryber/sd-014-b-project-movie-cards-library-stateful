import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';
import movies from './data';
import './App.css';

function App() {
  const defaultCallback = (item) => {
    console.log(item);
  };
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <AddMovie onClick={ defaultCallback } />
    </div>
  );
}

export default App;
