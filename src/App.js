import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovies from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovies />
    </div>
  );
}

export default App;
