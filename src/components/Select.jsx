import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          type="text"
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

Select.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
