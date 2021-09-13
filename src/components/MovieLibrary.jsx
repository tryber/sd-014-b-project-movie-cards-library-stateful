import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  /**
   * Consultei o repositorio do colega Michael
   * a fim de estudar e entender a forma com que
   * ele pega a 'props' como parametro no 'constructor'
   * e posteriomente tambem no 'super' para então
   * conseguir fazer a destruturação do
   * { movies } = this.props;
   * Ref: https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/64/commits/de04ec524f18b8f481cf773fb76e8601bc6b6a6b
   */
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  isCardValid = ({ title, subtitle, storyline }, searchText) => title.toLowerCase()
    .includes(searchText.toLowerCase())
    || subtitle.toLowerCase().includes(searchText.toLowerCase())
    || storyline.toLowerCase().includes(searchText.toLowerCase());

  filteredMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    if (searchText !== '') {
      return movies.filter((card) => this.isCardValid(card, searchText));
    }
    if (selectedGenre !== '') {
      return movies.filter((card) => card.genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      return movies.filter((card) => card.bookmarked === bookmarkedOnly);
    }
    return movies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
          movies={ movies }
        />
        <MovieList movies={ this.filteredMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
