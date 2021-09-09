import React from 'react';

import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
// import MovieList from './components/MovieList';
// import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      {/* <MovieList movies={ movies } /> */}
    </div>
  );
}

export default App;
