// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    const movieList = movies;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movieList,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBookmarked = this.handleBookmarked.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleTextChange(event) {
    const { movies } = this.props;
    const movieList = movies;
    this.setState({
      searchText: event.target.value,
      genre: '',
    }, () => this.setState((prevState) => ({
      movies: movieList.filter((movie) => (
        movie.title.includes(prevState.searchText)
        || movie.subtitle.includes(prevState.searchText)
        || movie.storyline.includes(prevState.searchText))),
    })));
  }

  handleBookmarked(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    }, () => {
      const { bookmarkedOnly } = this.state;
      if (bookmarkedOnly === true) {
        return (this.setState((prevState) => ({
          movies: prevState.movies.filter((movie) => movie.bookmarked === true),
        })));
      }
      return (this.setState((prevState) => ({
        movies: prevState.movies,
      })));
    });
  }

  handleSelectedGenre(event) {
    const { movies } = this.props;
    const movieList = movies;
    this.setState({
      selectedGenre: event.target.value,
    }, () => {
      this.setState((prevState) => ({
        movies: movieList.filter((movie) => (
          movie.genre.includes(prevState.selectedGenre))),
      }));
    });
  }

  handleLoad() {
    const moviesList = this.props.movies;
    this.setState({
      movies: moviesList,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.state;
    return (
      <div onLoadStart={ this.handleLoad }>
        <SearchBar
          searchText={ searchText }
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

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
