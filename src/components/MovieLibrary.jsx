// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { movies } = this.props;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let movieFilter = movies;

    movieFilter = movieFilter.filter((
      { title, subtitle, storyline, genre },
    ) => title.includes(target.value) || subtitle.includes(target.value)
        || storyline.includes(target.value) || genre.includes(target.value));

    this.setState({
      [name]: value,
      // movies: filterMovie,
      movies: movieFilter,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    // const { movies } = this.props;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
