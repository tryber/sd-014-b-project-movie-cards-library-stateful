import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GenreTag extends Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Gênero
        <select data-testid="genre-input" value={ genre } onChange={ onChange }>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreTag.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
