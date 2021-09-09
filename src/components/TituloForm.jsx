import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Titulo extends Component {
  render() {
    const { value, handleMovie } = this.props;

    return (
      <label htmlFor="control1" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          onChange={ handleMovie }
          value={ value }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  value: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired,
};

export default Titulo;
