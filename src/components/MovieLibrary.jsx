import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

class MovieLibrary extends React.Component {
    constructor() {
        super();
        this.state = {
          searchText: '',
          bookmarkedOnly: false,
          selectedGenre: '',
        }
    }
  render() {
      const { movies } = this.props;
    return (
        <section>
            <SearchBar />
            <AddMovie />
            <div>
                {movies.map((movie) => <MovieCard movie={ movie }/>)}
            </div>
        </section>
    )
  }
}

export default MovieLibrary;
