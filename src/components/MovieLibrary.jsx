// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <AddMovie onClick={ () => {} } />);
  }
}

export default MovieLibrary;
