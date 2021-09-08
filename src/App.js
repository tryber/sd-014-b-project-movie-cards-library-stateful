import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
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
      <AddMovie onClick />
    </div>
  );
}

export default App;
