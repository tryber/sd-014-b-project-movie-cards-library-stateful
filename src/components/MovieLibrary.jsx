// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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

  onSearchTextChange = (e) => {
    const { name, value } = e.target;
    const { searchText, movies } = this.state;
    const filter = movies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      const searchTitle = title.toLowerCase().includes(searchText.toLowerCase());
      const searchSub = subtitle.toLowerCase().includes(searchText.toLowerCase());
      const searchStory = storyline.toLowerCase().includes(searchText.toLowerCase());
      return searchTitle || searchSub || searchStory;
    });

    this.setState({
      [name]: value,
      movies: filter,
    });
  }

  onBookmarkedChange = (e) => {
    const { name, checked } = e.target;
    const { movies } = this.state;

    const filter = movies.filter((movie) => movie.bookmarked === checked);

    this.setState({
      [name]: checked,
      movies: filter,
    });
  }

  onSelectedGenreChange = (e) => {
    const { name, value } = e.target;
    const { movies } = this.state;

    const filter = movies.filter((movie) => movie.genre === value);

    this.setState({
      [name]: value,
      movies: filter,
    });
  }

  addMovie = (movie) => {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
