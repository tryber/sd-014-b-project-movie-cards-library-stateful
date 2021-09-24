// implement MovieLibrary component here
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

  filterText = ({ title, subtitle, storyline }) => {
    const { searchText } = this.state;

    const verTitle = title.toLowerCase().includes(searchText);
    const verSubTitle = subtitle.toLowerCase().includes(searchText);
    const verStoryLine = storyline.toLowerCase().includes(searchText);

    return verTitle || verSubTitle || verStoryLine;
  }

  filterBookmarked = ({ bookmarked }) => {
    const { bookmarkedOnly } = this.state;

    if (!bookmarkedOnly) return true;
    return bookmarked === bookmarkedOnly;
  }

  filterGenre = ({ genre }) => {
    const { selectedGenre } = this.state;

    if (selectedGenre === '') return true;
    return genre === selectedGenre;
  }

  filteredMovie = () => {
    const { movies } = this.props;

    const filter = movies
      .filter((movie) => this.filterText(movie))
      .filter((movie) => this.filterBookmarked(movie))
      .filter((movie) => this.filterGenre(movie));

    this.setState({
      movies: filter,
    });
  }

  createNewMovie = (newMovie) => {
    const { movies } = this.props;
    console.log(movies);
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.filteredMovie);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
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
