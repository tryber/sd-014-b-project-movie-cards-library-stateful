import React from 'react';
import PropTypes from 'prop-types';

class SelectForm extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero:
        <select
          data-testid="genre-input"
          value={ genre }
          name="genre"
          id="genre"
          onChange={ handleChange }
        >
          <option data-testid="genre-option" name="genre" id="genre" value="action">
            Ação
          </option>
          <option data-testid="genre-option" name="genre" id="genre" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" name="genre" id="genre" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SelectForm.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectForm;
