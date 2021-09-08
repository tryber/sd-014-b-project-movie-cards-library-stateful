import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar movies={ movies } />
      <MovieList movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
