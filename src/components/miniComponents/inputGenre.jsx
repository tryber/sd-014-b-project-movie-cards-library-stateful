import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGenre extends Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input-label" name="genre">
        Gênero
        <select
          onChange={ onChange }
          value={ genre }
          name="genre"
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGenre;
