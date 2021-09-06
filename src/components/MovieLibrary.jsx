import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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

  createNewMovie = (newMovie) => {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  onSearchTextChange = ({ target }) => {
    const { name, value } = target;
    const { searchText, movies } = this.state;

    const filter = movies.filter(({ title, subtitle, storyline }) => {
      const verTitle = title.toLowerCase().includes(searchText);
      const verSubTitle = subtitle.toLowerCase().includes(searchText);
      const verStoryLine = storyline.toLowerCase().includes(searchText);

      return verTitle || verSubTitle || verStoryLine;
    });

    this.setState({
      [name]: value,
      movies: filter,
    });
  }

  onBookmarkedChange = ({ target }) => {
    const { name, checked } = target;
    const { movies } = this.state;

    const filter = movies.filter(({ bookmarked }) => bookmarked === checked);

    this.setState({
      [name]: checked,
      movies: filter,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { name, value } = target;
    const { movies } = this.state;

    const filter = movies.filter(({ genre }) => genre === value);

    this.setState({
      [name]: value,
      movies: filter,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }

        />
        <AddMovie onClick={ this.createNewMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
