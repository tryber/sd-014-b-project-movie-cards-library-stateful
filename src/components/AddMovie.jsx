import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  render() {
    const { title, changeState } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título:
          <input
            type="text"
            id="title-input"
            title={ title }
            data-testid="title-input"
            onChange={ changeState }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default AddMovie;
