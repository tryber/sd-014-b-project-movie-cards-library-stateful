// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movie: null,
    };
  }

  render() {
    return (
      <section>
        <SearchBar />
      </section>
    );
  }
}

export default MovieLibrary;
