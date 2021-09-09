import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.newMovie = this.newMovie.bind(this);
  }

  newMovie(state) {
    console.log(state);
  }

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
          <MovieLibrary />
          <AddMovie onClick={ this.newMovie } />
        </main>
      </>
    );
  }
}

export default App;
