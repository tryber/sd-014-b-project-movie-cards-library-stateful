import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          type="select"
          name="genre"
          data-testid="genre-input"
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

InputSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default InputSelect;
