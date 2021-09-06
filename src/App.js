import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';
import './App.css';
import movies from './data';
import MovieLibrary from './components/MovieLibrary'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies }/>
    </div>
  );
}

export default App;
