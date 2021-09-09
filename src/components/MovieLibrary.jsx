import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      standardMovieList: props.movies,
    };
    this.changer = this.changer.bind(this);
    this.tripleFilter = this.tripleFilter.bind(this);
  }

  tripleFilter() {
    const { standardMovieList, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let output = standardMovieList;
    output = bookmarkedOnly
      ? output.filter(({ bookmarked }) => bookmarked) : output;
    output = selectedGenre !== ''
      ? output.filter(({ genre }) => genre === selectedGenre) : output;
    output = searchText !== ''
      ? output.filter(({ title, subtitle, storyline }) => title
        .toUpperCase().includes(searchText.toUpperCase()) || subtitle
        .toUpperCase().includes(searchText.toUpperCase()) || storyline
        .toUpperCase().includes(searchText.toUpperCase())) : output;
    return output;
  }

  changer(keyName, { target: { value } }) {
    this.setState({
      [keyName]: value }, () => this.setState({
      movies: this.tripleFilter(),
    }));
  }

  render() {
    const {
      searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ (event) => this
            .changer('searchText', event) }
          onSelectedGenreChange={ (event) => this
            .changer('selectedGenre', event) }
          onBookmarkedChange={ (event) => this
            .changer('bookmarkedOnly', event) }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
