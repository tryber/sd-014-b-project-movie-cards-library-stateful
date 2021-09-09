import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
