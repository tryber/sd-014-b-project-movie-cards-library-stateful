// implement MovieLibrary component here
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
    this.handleChange = this.handleChange.bind(this);
    this.filterSelection = this.filterSelection.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  // Código dá linha abaixo tirada de um exemplo dado em aula pelo professor Luanderson
  // Parâmetro da linha abaixo é uma desestruturação de event
  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const { movies } = this.props;
    this.setState({
      [name]: value,
    }, () => this.filterSelection(target, movies));
  }

  filterSelection(_target, array) {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    const filterSelection = array.filter((
      { title,
        subtitle,
        storyline,
      },
    ) => (
      title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText)
    ));
    const filterFavorite = filterSelection.filter((movie) => {
      if (bookmarkedOnly === true) {
        return movie.bookmarked === true;
      }
      return movie;
    });
    const filterGenre = filterFavorite.filter((movie) => {
      if (selectedGenre !== '') {
        return movie.genre === selectedGenre;
      }
      return movie;
    });
    this.setState({
      movies: filterGenre,
    });
  }

  newMovie(state) {
    const { movies } = this.props;
    movies.push(state);
    console.log(movies);
    this.filterSelection(undefined, movies);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
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
        <AddMovie onClick={ this.newMovie } />
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
