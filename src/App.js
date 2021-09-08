import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <>
      <header className="App">
        <Header />
      </header>
      <main>
        <SearchBar
          searchtext=""
          onSearchTextChange=""
          bookmarkedOnly=""
          selectedGenre
          onSelectedGenreChange
        />
      </main>
    </>

  );
}

export default App;
