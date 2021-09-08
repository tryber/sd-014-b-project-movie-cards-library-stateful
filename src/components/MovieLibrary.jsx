import React, { Component } from 'react';
/* import SearchBar from './SearchBar'; */
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  /* constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleClick = (newMovie) => {
    movies.push(newMovie);
    this.setState({
      movies,
    });
  }

  filterByText= (text) => {
    this.setState({
      movies: movies.filter((element) => element.title.includes(text)
      || element.subtitle.includes(text)
      || element.storyline.includes(text)),
    });
  }

  filterByGenre = (select) => {
    this.setState({
      movies: movies.filter((element) => element.genre === select)
    });
  }

  filterByFavorite = (check) => {
    this.setState({
      movies: movies.filter((element) => element.bookmarked === check)
    });
  }; */

  render() {
    const { movies, handleClick } = this.props;
    /*  const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state; */
    return (
      <div>
        {/* <SearchBar
          searchText={ searchText }
          onSearchTextChange={ }
          bookmarkedOnly={ bookmarkedOnly  }
          onBookmarkedChange={  }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ }
        /> */}
        <AddMovie onClick={ handleClick } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MovieLibrary;
