import React from 'react';
import Header from './components/Header';
import './App.css';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieCard movie={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
