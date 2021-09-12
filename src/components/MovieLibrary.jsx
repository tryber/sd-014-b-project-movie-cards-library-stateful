import React, { Component } from 'react';

class MovieLibrary extends Component {
	render() {
    const { movies } = this.props;
    return(
      console.log(movies);
    );
  }
}

export default MovieLibrary;
