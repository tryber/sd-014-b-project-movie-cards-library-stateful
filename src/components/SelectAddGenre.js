import React from 'react';
import PropTypes from 'prop-types';

class SelectAddGenre extends React.Component {
  render() {
    const { name, description, value, handleChange } = this.props;
    return (
      <label
        data-testid={ `${name}-input-label` }
        className="form-label"
        htmlFor={ `add-${name}` }
      >
        {description}
        <select
          data-testid={ `${name}-input` }
          className="form-input"
          id={ `add-${name}` }
          name={ name }
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectAddGenre.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectAddGenre;
