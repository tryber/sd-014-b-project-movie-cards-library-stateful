import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      bookmark: false,
      genre: '',
    }
  }

  handleTextChange() {

  }

  handleBookmarked() {
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar searchText={this.state.search} onSearchTextChange={this.handleTextChange} bookmarkedOnly={this.state.bookmark} onBookmarkedChange={this.handleBookmarked} selectedGenre={this.state.genre} onSelectedGenreChange={this.handleSelectedGenre} />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default App;
