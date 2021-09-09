// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return(
      <section>
        
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieLibrary;
