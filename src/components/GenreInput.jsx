import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GenreInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            name="genre"
            value={ value }
            onChange={ onChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

GenreInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
