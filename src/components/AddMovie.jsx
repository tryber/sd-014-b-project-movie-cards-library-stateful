import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action'
  //   };
  // }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title">
          Titulo
          <input type="text" name="title" id="title" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
