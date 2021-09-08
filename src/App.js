import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar 
        searchText="opa"
        onSearchTextChange
        bookmarkedOnly
        onBookmarkedChange
        selectedGenre
        onSelectedGenreChange
      />
    </div>
  );
}

export default App;
