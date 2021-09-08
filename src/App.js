import React from 'react';
import Header from './components/Header';
import movies from './data';
import './App.css';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar searchProps={ movies } />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
