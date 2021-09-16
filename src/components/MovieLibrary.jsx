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
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
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

  filterMovies = (movie) => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let checkMovie = true;
    const { title,
      subtitle,
      storyline,
      bookmarked,
      genre,
    } = movie;
    if (bookmarkedOnly) checkMovie = bookmarked;
    if (!genre.includes(selectedGenre)) return false;
    if (title.includes(searchText)) return checkMovie;
    if (storyline.includes(searchText)) return checkMovie;
    if (subtitle.includes(searchText)) return checkMovie;
    return false;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList
          movies={ movies.filter(this.filterMovies) }
        />
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
