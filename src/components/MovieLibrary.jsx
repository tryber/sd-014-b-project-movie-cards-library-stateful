// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onChangeSearchText = this.onChangeSearchText.bind(this);
    this.onBookmarkedOnly = this.onBookmarkedOnly.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChangeSearchText(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedOnly(event) {
    this.setState({
      bookmarkedOnly: event.target.value,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.checked,
    });
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <span>MovieLibrary</span>
        <SearchBar
          // searchText={ searchText }
          onChangeSearchText={ this.onChangeSearchText }
          // bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedOnly={ this.onBookmarkedOnly }
          // selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }

        />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
