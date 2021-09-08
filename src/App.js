import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <header className="App">
          <Header />
        </header>
        <main>
          <SearchBar
            searchtext=""
            onSearchTextChange={ this.onSearchTextChange }
            bookmarkedOnly=""
            selectedGenre
            onSelectedGenreChange
          />
        </main>
      </>
    );
  }
}

export default App;
