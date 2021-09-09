import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      // searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.filmes,
    };
  }

  onSelectedGenreChange = ({ target: { value } }) => {
    const { filmes } = this.props;
    console.log(value);
    if (value === '') {
      this.setState({
        selectedGenre: '',
        movies: filmes,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies: filmes.filter((filme) => filme.genre === value),
      });
    }
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    const { filmes } = this.props;
    if (checked) {
      this.setState({
        bookmarkedOnly: true,
        movies: filmes.filter((filme) => filme.bookmarked === true),
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
        movies: filmes,
      });
    }
  }

  render() {
    const {
      // searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    return (
      <div>
        <SearchBar
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
  filmes: PropTypes.arrayOf(
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
