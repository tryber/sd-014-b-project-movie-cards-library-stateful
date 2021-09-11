import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
// import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = (state) => {
    console.log(state);
    // const { movies } = this.props;
    // this.setState({
    //   movies: [...movies, state],
    // });
  }

  render() {
    const { movies } = this.props;
    // const { movies } = this.state;
    return (
      <section>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
