import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  // onBookmarkedChange({ target }) {
  //   this.setState({
  //     bookmarkedOnly: target.checked,
  //   });
  // }

  // onSelectedGenreChange({ target }) {
  //   this.setState({
  //     selectedGenre: target.value,
  //   })
  // }

  render() {

    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          // onBookmarkedChange={ this.onBookmarkedChange }
          // onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={this.props.movies} />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
