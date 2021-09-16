// https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful
import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
/* import MovieLibrary from './components/MovieLibrary'; */
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
