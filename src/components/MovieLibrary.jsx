// implement MovieLibrary component here
// 15 - Crie um componente chamado <MovieLibrary />
// 16 - Configure o estado inicial do componente <MovieLibrary />
// 17 - Renderize <SearchBar /> dentro de <MovieLibrary />
// 18 - Renderize <MovieList /> dentro de <MovieLibrary />
// 19 - Renderize <AddMovie /> dentro de <MovieLibrary />
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange = (event) => {
    const { value } = event.target;
    this.setState({
      bookmarkedOnly: value,
    });
  }

  onSelectedGenreChange = (event) => {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
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
