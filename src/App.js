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
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleBookmarked(event) {
    this.setState({
      bookmarkedOnly: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ search }
          onSearchTextChange={ this.handleTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default App;
