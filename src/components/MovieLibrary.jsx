import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleCheckbox = (name, checked) => {
    if (checked) {
      this.setState({ [name]: true });
    } else { this.setState({ [name]: false }); }
  }

  handleClick = (event) => {
    const { value, name, type, checked } = event.target;
    if (type === 'checkbox') {
      this.handleCheckbox(name, checked);
    } else { this.setState({ [name]: value }); }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          callBack={ this.handleClick }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleClick }
          onBookmarkedChange={ this.handleClick }
          onSelectedGenreChange={ this.handleClick }
        />
        <MovieList movies={ movies } />
      </main>
    );
  }
}

export default MovieLibrary;
