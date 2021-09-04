import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';
// import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchBar /> */}
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
