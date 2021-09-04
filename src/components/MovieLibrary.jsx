// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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

  createNewMovie = (newMovie) => {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  // {
  //   title: 'Kingsglaive',
  //   subtitle: 'Final Fantasy XV',
  //   storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
  //   rating: 4.5,
  //   imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
  //   bookmarked: true,
  //   genre: 'action',
  // },

  onSearchTextChange = ({ target }) => {
    const { name, value } = target;
    const { searchText, movies } = this.state;

    const filter = movies.filter(({ title, subtitle, storyline }) => {
      const verTitle = title.toLowerCase().includes(searchText);
      const verSubTitle = subtitle.toLowerCase().includes(searchText);
      const verStoryLine = storyline.toLowerCase().includes(searchText);

      return verTitle || verSubTitle || verStoryLine;
    });

    this.setState({
      [name]: value,
      movies: filter,
    });
  }

  onBookmarkedChange = ({ target }) => {
    const { name, checked } = target;
    const { movies } = this.state;

    const filter = movies.filter(({ bookmarked }) => bookmarked === checked);

    this.setState({
      [name]: checked,
      movies: filter,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { name, value } = target;
    const { movies } = this.state;

    const filter = movies.filter(({ genre }) => genre === value);

    this.setState({
      [name]: value,
      movies: filter,
    });
  }

  // handleChange = ({ target }) => {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }

        />
        <AddMovie onClick={ this.createNewMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
