import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    // Pesquisado no PR do Ivanielson para entender onde se encaixava o Filter e entendi que o correto é tratar o movies como state e não como propss
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange(event) {
    const { movies, searchText } = this.state;
    this.setState({
      searchText: event.target.value,
      movies: movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
  || subtitle.includes(searchText)
  || storyline.includes(searchText)
      )),
    });
  }

  onBookmarkedChange(event) {
    const { movies } = this.state;
    this.setState({
      bookmarkedOnly: event.target.checked,
      movies: movies.filter((element) => element.bookmarked === true),
    });
  }

  onSelectedGenreChange(event) {
    const { movies } = this.state;
    this.setState({
      selectedGenre: event.target.value,
      movies: movies.filter(({ genre }) => genre === event.target.value),
    });
  }

  onClick(object) {
    const { movies } = this.state;
    const newMovies = [...movies, object];
    this.setState({
      movies: newMovies,
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
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
