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

    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  //   this.filterChange();
  // }

  // Feito em conjunto com o @Matheus Kaffka.
  handleChange({ target }) {
    const { name } = target;
    const { movies } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });

    if (value) {
      const filter = movies.filter((movie) => movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)
      || movie.genre === value
      || movie.bookmarked === value);

      this.setState({
        movies: filter,
      });
    } else {
      this.setState({
        movies,
      });
    }
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
    // console.log([...movies, state]);
  }

  // filterChange() {
  //   const { searchText, bookmarkedOnly, selectedGenre } = this.state;
  //   const { movies } = this.props;

  //   const array = movies.filter((element) => (
  //     element.title.includes(searchText)
  //     || element.subtitle.includes(searchText)
  //     || element.storyline.includes(searchText)
  //   ));
  //   this.setState({
  //     movies: array,
  //   });
  // }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
