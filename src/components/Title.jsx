import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="movie-title" data-testid="title-input-label">
        <p>Título</p>
        <input
          name="title"
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
          id="movie-title"
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;

// Consultei o repositório de Beatriz Rodrigues para fazer este Requisito.
// https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/86
