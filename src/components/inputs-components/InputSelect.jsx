import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        <p>Gênero</p>
        <select
          name="genre"
          id="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSelect;
