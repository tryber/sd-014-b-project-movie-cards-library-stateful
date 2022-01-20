import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    const { movies } = props;

    this.onClick = this.onClick.bind(this);
    this.searchHandleChange = this.searchHandleChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  searchHandleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }
  // Ver a documentação do React constructor, para ver onde passa a props. Dica do Gustavo Santanna

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2 className="gallery-title"> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.searchHandleChange }
          onBookmarkedChange={ this.searchHandleChange }
          onSelectedGenreChange={ this.searchHandleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
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
