import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Genre extends Component {
  render() {
    const { genre, onChange } = this.props;

    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
