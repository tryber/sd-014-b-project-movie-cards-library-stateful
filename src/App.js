import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
