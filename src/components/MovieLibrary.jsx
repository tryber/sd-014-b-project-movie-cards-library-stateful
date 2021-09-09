import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    const movies = this.props;
    this.handleChange = this.handleChange.bind(this);

    // this.SearchBar = this.SearchBar.bind(this);

    this.setState({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { movies },
    });
  }

  handleChange({ target }) {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChenge={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
