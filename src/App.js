import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';
import AddMovie from './components/AddMovie';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
