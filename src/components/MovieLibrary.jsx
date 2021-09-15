// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import data from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  // Referência: https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/22/files
  handleChange = ({ target }) => {
    const { id } = target;
    const { movies } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [id]: value });

    if (value) {
      const filter = movies.filter((movie) => movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value)
        || movie.genre === value
        || movie.bookmarked === value);

      this.setState({ movies: filter });
    } else {
      this.setState({ movies: data });
    }
  }

  // Referência: https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/22/files
  onClick = (state) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, state] });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieLibrary;
