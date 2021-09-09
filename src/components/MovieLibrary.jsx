// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
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

  //  lógica de todas as consts filter retirada do repositório do Fernando Serpa ref:https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/commit/4bfd75551ba7215aeafcd1367366d1d1e830ccec

  onSearchTextChange = (event) => {
    const { name, value } = event.target;
    const { searchText, movies } = this.state;
    const filter = movies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      const searchTitle = title.toLowerCase().includes(searchText.toLowerCase());
      const searchSubtitle = subtitle.toLowerCase().includes(searchText.toLowerCase());
      const searchStoryline = storyline.toLowerCase().includes(searchText.toLowerCase());
      return searchTitle || searchSubtitle || searchStoryline;
    });

    this.setState({
      [name]: value,
      movies: filter,
    });
  }

  onBookmarkedChange = (event) => {
    const { name, checked } = event.target;
    const { movies } = this.state;
    const filter = movies.filter((movie) => movie.bookmarked === checked);

    this.setState({
      [name]: checked,
      movies: filter,
    });
  }

  onSelectedGenreChange = (event) => {
    const { name, value } = event.target;
    const { movies } = this.state;
    const filter = movies.filter((movie) => movie.genre === value);

    this.setState({
      [name]: value,
      movies: filter,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
      </div>);
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
