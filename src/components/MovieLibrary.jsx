import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange = ({ target: { value } }) => {
    const { movies } = this.props;

    this.setState({
      movies: movies.filter((movie) => movie.title.toLowerCase().includes(value)
        || movie.subtitle.toLowerCase().includes(value)
        || movie.storyline.toLowerCase().includes(value)),
      searchText: value,
    });
  }

  onSelectedGenreChange = ({ target: { value } }) => {
    const { movies } = this.props;
    console.log(value);
    if (value === '') {
      this.setState({
        selectedGenre: '',
        movies,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies: movies.filter((filme) => filme.genre === value),
      });
    }
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    const { movies } = this.props;
    if (checked) {
      this.setState({
        bookmarkedOnly: true,
        movies: movies.filter((movie) => movie.bookmarked === true),
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
        movies,
      });
    }
  }

  AddMovie = (target) => {
    const { movies } = this.props;
    this.setState({
      // movies: movies.push(target), // mutative
      // movies: movies.splice(movies.length, 0, target), // mutative
      // movies: movies[movies.length] = target, // mutative
      movies: movies.concat(target), // non mutative
      // movies: [...movies, target], // non mutative

    });
    console.log('aqui estaaaa');
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
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.AddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
